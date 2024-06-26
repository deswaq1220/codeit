'use client'
import Done from "@/components/done/Done";
import Search from "@/components/search/Search";
import Todo from "@/components/todo/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { homeContainer, todoList } from "./home.css";
import './page.module.css';


const tenantId = "sexydynamite";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [todoItems, setTodoItems] = useState([]);


  // 투두 불러오는 함수
  const fetchTodoData = async () => {
    try {
      const response = await axios.get(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items`);
      if (!response) {
        console.error('요청 실패');
      } else {
        setTodoItems(response.data);
        console.log(response.data)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchTodoData();
  }, []);

  // 투두 추가 함수
  const addTodoItem = async (name: string) => {
    try {
      const response = await axios.post(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items`, { name });
      if (response.status === 201) {
        fetchTodoData(); // 새 데이터를 추가한 후 데이터를 다시 가져옴
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //투두 완료 체크
  const completedTodoItem = async (itemId: number) => {
    try {
      const updateData = {
        isCompleted: true
      };
      await axios.patch(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`, updateData)
      fetchTodoData(); // 완료 후 데이터를 다시 가져옴
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // 완료된 항목과 완료되지 않은 항목을 필터링
  const completedItems = todoItems.filter(item => item.isCompleted);
  const incompleteItems = todoItems.filter(item => !item.isCompleted);

  // 윈도우 너비 확인용
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    setHasMounted(true);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!hasMounted) {
    return null; // 클라이언트가 마운트되기 전에는 아무것도 렌더링하지 않음
  }

  return (
    <div className={homeContainer}>
      <Search addTodoItem={addTodoItem} />
      <div className={todoList}>
        <Todo todoItems={incompleteItems} completedTodoItem={completedTodoItem} />
        <Done doneItems={completedItems} />
      </div>
    </div>
  );
}
