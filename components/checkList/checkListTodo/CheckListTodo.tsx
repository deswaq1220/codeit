import { checkBoxTodoImage, checkListTodoContainer } from "./checkListTodo.css"

const CheckListTodo = ({ todoItems }) => {
  return (
    <>
      {
        todoItems.map((item) => (
          <ul className={checkListTodoContainer} key={item.id}>
            <li className={checkBoxTodoImage}></li>
            <p>{item.name}</p>
          </ul>
        ))
      }

    </>
  )
}

export default CheckListTodo