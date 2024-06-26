'use client'
import todo from "@/public/images/todo.svg"
import Image from "next/image"
import CheckListTodo from "../checkList/checkListTodo/CheckListTodo"
import { emptyTodo, todoContainer, todoIcon, todoImageContainer, todoTextContainer } from './todo.css'


interface TodoProps {
  todoItems: Array<{ id: string, name: string }>;
}

const Todo = ({ todoItems }: TodoProps) => {
  return (

    <div className={todoContainer}>
      <div className={todoIcon}>
        <Image src={todo} alt='todo' />
      </div>
      {todoItems ? (
        <CheckListTodo todoItems={todoItems} />
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