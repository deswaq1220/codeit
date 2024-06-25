
import done from '@/public/images/done.svg'
import Image from "next/image"
import { doneContainer, doneIcon, doneImageContainer, doneTextContainer, emptyDone } from './done.css'
const Done = () => {
  return (
    <div className={doneContainer}>
      <div className={doneIcon}>
        <Image src={done} alt='done' />
      </div>
      <div className={doneImageContainer}>
        <div className={emptyDone} />
        <div className={doneTextContainer}>
          <span>아직 다 한 일이 없어요.</span>
          <span>해야 할 일을 체크해보세요!</span>
        </div>
      </div>
    </div>
  )
}

export default Done