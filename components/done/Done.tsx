
import done from '@/public/images/done.svg'
import Image from "next/image"
import CheckListDone from '../checkList/checkListDone/CheckListDone'
import { doneContainer, doneIcon, doneImageContainer, doneTextContainer, emptyDone } from './done.css'

interface DoneProps {
  doneItems: Array<{ id: string, name: string }>
}
const Done = ({ doneItems }: DoneProps) => {
  return (
    <div className={doneContainer}>
      <div className={doneIcon}>
        <Image src={done} alt='done' />
      </div>
      {doneItems ? (<CheckListDone doneItems={doneItems} />) : (
        <div className={doneImageContainer}>
          <div className={emptyDone} />
          <div className={doneTextContainer}>
            <span>아직 다 한 일이 없어요.</span>
            <span>해야 할 일을 체크해보세요!</span>
          </div>
        </div>

      )}
      {/* <CheckListDone /> */}
    </div>
  )
}

export default Done