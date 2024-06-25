import { checkBoxTodoImage, checkListTodoContainer } from "./checkListTodo.css"

const CheckList = () => {
  return (
    <div className={checkListTodoContainer}>
      <div className={checkBoxTodoImage}></div>
      <p>비타민 챙겨먹기</p>
    </div>
  )
}

export default CheckList