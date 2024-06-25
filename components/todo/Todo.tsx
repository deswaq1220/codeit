
import todo from '@/public/images/todo.svg'
import Image from "next/image"
import { emptyTodo, todoContainer, todoIcon, todoImageContainer, todoTextContainer } from './todo.css'
const Todo = () => {
  return (
    <div className={todoContainer}>
      <div className={todoIcon}>
        <Image src={todo} alt='todo' />
      </div>
      <div className={todoImageContainer}>
        <div className={emptyTodo} />
        <div className={todoTextContainer}>
          <span>할 일이 없어요.</span>
          <span>TODO를 새롭게 추가해주세요!</span>
        </div>
      </div>
    </div>
  )
}

export default Todo