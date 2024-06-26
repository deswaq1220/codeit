import { checkBoxDoneImage, checkListDoneContainer } from "./checkListDone.css"

const CheckListDone = ({ doneItems }) => {
  return (
    <>
      {
        doneItems.map((item) => (
          <ul className={checkListDoneContainer} key={item.id}>
            <div className={checkBoxDoneImage}></div>
            <p><del> {item.name}</del> </p>
          </ul>
        ))
      }
    </>

  )
}

export default CheckListDone