import { checkBoxTodoImage, checkListTodoContainer } from "./checkListTodo.css"

const CheckListTodo = ({ todoItems, completedTodoItem }) => {
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
            <p>{item.name}</p>
          </ul>
        ))
      }

    </>
  )
}

export default CheckListTodo