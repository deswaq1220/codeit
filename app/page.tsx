'use client'
import Done from "@/components/done/Done";
import Search from "@/components/search/Search";
import Todo from "@/components/todo/Todo";
import { useEffect, useState } from "react";
import { homeContainer, todoList } from "./home.css";
import './page.module.css';
export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

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
      <Search />
      <div className={todoList}>
        <Todo />
        <Done />
      </div>
    </div>
  );
}
