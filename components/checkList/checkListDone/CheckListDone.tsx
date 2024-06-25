import { checkBoxDoneImage, checkListDoneContainer } from "./checkListDone.css"

const CheckListDone = () => {
  return (
    <div className={checkListDoneContainer}>
      <div className={checkBoxDoneImage}></div>
      <p>운동다녀오기</p>
    </div>
  )
}

export default CheckListDone