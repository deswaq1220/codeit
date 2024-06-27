'use client'
import { useRouter } from "next/navigation";
import { checkBoxTodoImage, checkListTodoContainer } from "./checkListTodo.css";

interface TodoItem {
  id: number;
  name: string;
}

interface CheckListTodoProps {
  todoItems: TodoItem[];
  completedTodoItem: (itemId: number) => void;
}

const CheckListTodo = ({ todoItems, completedTodoItem }: CheckListTodoProps) => {
  const router = useRouter();


  const handleNavigation = (id: number) => {
    router.push(`/detail/${id}`);
  }

  return (
    <>
      {
        todoItems.map((item) => (
          <ul className={checkListTodoContainer} key={item.id} >
            <li
              className={checkBoxTodoImage}
              onClick={() => completedTodoItem(item.id)}
            >
            </li>
            <p onClick={() => handleNavigation(item.id)}>{item.name}</p>
          </ul>
        ))
      }

    </>
  )
}

export default CheckListTodo