import '@/app/page.module.css';
import { memoContainer, memoText, textArea } from "./memoRegistration.css";
const MemoRegistration = ({ memo, setMemo }) => {



  return (
    <div className={memoContainer}>
      <div className={memoText}>
        <p>Memo</p>
      </div>
      <textarea className={textArea} value={memo || ""} onChange={(e) => setMemo(e.target.value)} />
    </div>
  )
}

export default MemoRegistration