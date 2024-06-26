import '@/app/page.module.css'
import { memoContainer, memoText, textArea } from "./memoRegistration.css"
const MemoRegistration = () => {
  return (
    <div className={memoContainer}>
      <div className={memoText}>
        <p>Memo</p>
      </div>
      <textarea className={textArea} />
    </div>
  )
}

export default MemoRegistration