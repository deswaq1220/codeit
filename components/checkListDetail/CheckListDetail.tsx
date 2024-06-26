import { checkBoxTodoImage } from "../checkList/checkListTodo/checkListTodo.css"
import { checkListNameContainer } from "./checkListDetail.css"

const CheckListDetail = () => {
  return (
    <div className={checkListNameContainer}>
      <div className={checkBoxTodoImage}></div>
      <p><u>비타민 챙겨먹기</u></p>
    </div>
  )
}

export default CheckListDetail