
import todo from "@/public/images/todo.svg";
import Image from "next/image";
import CheckListTodo from "../checkList/checkListTodo/CheckListTodo";
import { emptyTodo, todoContainer, todoIcon, todoImageContainer, todoTextContainer } from './todo.css';


interface TodoProps {
  todoItems: Array<{ id: string, name: string }>;
  completedTodoItem: (itemId: number) => void;
}

const Todo = ({ todoItems, completedTodoItem }: TodoProps) => {

  return (
    <div className={todoContainer}>
      <div className={todoIcon}>
        <Image src={todo} alt='todo' />
      </div>
      {todoItems ? (
        <CheckListTodo todoItems={todoItems} completedTodoItem={completedTodoItem} />
      ) : (
        <div className={todoImageContainer}>
          <div className={emptyTodo} />
          <div className={todoTextContainer}>
            <span>할 일이 없어요.</span>
            <span>TODO를 새롭게 추가해주세요!</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo