'use client'
import { useRouter } from "next/navigation";
import { checkBoxTodoImage, checkListTodoContainer } from "./checkListTodo.css";

const CheckListTodo = ({ todoItems, completedTodoItem }) => {
  const router = useRouter();


  const handleNavigation = (id) => {
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