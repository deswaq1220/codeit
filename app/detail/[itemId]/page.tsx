'use client'
import CheckListDetail from "@/components/checkListDetail/CheckListDetail"
import ImageRegistration from "@/components/imageRegistration/ImageRegistration"
import MemoRegistration from "@/components/memoRegistration/MemoRegistration"
import xIcon from "@/public/icons/X.svg"
import checkIcon from '@/public/icons/check.svg'
import useTodoDetailStore from "@/store/useTodoDetail"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { deleteBtn, detailBtnWrap, detailContainer, detailListContainer, imageMemoContainer, modifyBtn, modifyBtnSuccess } from "../detail.css"
const tenantId = "sexydynamite";

const Detail = (props: { params: { itemId: string } }) => {
  const itemId = props.params.itemId
  const [todoDetails, setTodoDetails] = useState({ name: '', memo: '', imageUrl: '', isCompleted: false });
  const [isModified, setIsModified] = useState(false);
  const { name, memo, imageUrl, isCompleted, setName, setMemo, setImageUrl, setIsCompleted } = useTodoDetailStore();

  const router = useRouter();


  const handleNavigation = () => {
    router.push(`/`);
  }

  // 투두 상세 불러오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`)
      setTodoDetails(response.data)
      setName(response.data.name);
      setMemo(response.data.memo);
      setIsCompleted(response.data.isCompleted);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // 투두상세 수정 함수
  const modifyTodoItem = async () => {
    try {
      const updateData = {
        name: todoDetails.name.trim() !== '' ? todoDetails.name : '',
        memo: todoDetails.memo.trim() !== '' ? todoDetails.memo : '',
        imageUrl: todoDetails.imageUrl,
        isCompleted: todoDetails.isCompleted
      };
      const response = await axios.patch(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`, updateData)
      setIsModified(true);
      handleNavigation()
      fetchData(); // 완료 후 데이터를 다시 가져옴
    } catch (error) {
      console.error('Error:', error);
    }
  }



  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={detailContainer}>
      <div className={detailListContainer}>
        <CheckListDetail todoDetails={todoDetails} setTodoDetails={setTodoDetails} />
        <div className={imageMemoContainer}>
          <ImageRegistration imageUrl={todoDetails.imageUrl} />
          <MemoRegistration memo={todoDetails.memo} setMemo={(newMemo) => setTodoDetails({ ...todoDetails, memo: newMemo })} />
        </div>
        <div className={detailBtnWrap}>
          <button className={isModified ? modifyBtnSuccess : modifyBtn} onClick={modifyTodoItem}>
            <Image src={checkIcon} alt="체크아이콘" />
            수정완료
          </button>
          <button className={deleteBtn}>
            <Image src={xIcon} alt="엑스아이콘" />
            삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail