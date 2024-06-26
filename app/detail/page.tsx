import CheckListDetail from "@/components/checkListDetail/CheckListDetail"
import ImageRegistration from "@/components/imageRegistration/ImageRegistration"
import MemoRegistration from "@/components/memoRegistration/MemoRegistration"
import xIcon from "@/public/icons/X.svg"
import checkIcon from '@/public/icons/check.svg'
import Image from "next/image"
import { deleteBtn, detailBtnWrap, detailContainer, detailListContainer, imageMemoContainer, modifyBtn } from "./detail.css"
const detail = () => {
  return (
    <div className={detailContainer}>
      <div className={detailListContainer}>
        <CheckListDetail />
        <div className={imageMemoContainer}>
          <ImageRegistration />
          <MemoRegistration />
        </div>
        <div className={detailBtnWrap}>
          <button className={modifyBtn}>
            <Image src={checkIcon} alt="체크아이콘" />
            수정완료</button>
          <button className={deleteBtn}>
            <Image src={xIcon} alt="엑스아이콘" />
            삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default detail