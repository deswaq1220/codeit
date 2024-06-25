'use client'
import plusB from "@/public/icons/plusB.svg";
import plusW from "@/public/icons/plusW.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { searchBar, searchBtn, searchBtnText, searchContainer } from "./search.css";

const tenantId = "sexydynamite";
const Search = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  //todo post 요청 
  const handleTodoList = async (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if (searchInputRef.current) {
      const enteredSearch = searchInputRef.current.value;
      console.log(enteredSearch); // 입력된 값 로그 찍어보깅

      const reqBody = { name: enteredSearch };

      try {
        const response = await fetch(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items`, {
          method: 'POST',
          body: JSON.stringify(reqBody),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          // 요청 실패 처리
          console.error('요청 실패');
        } else {
          console.log("요청성공", response)
          searchInputRef.current.value = ""; // 입력 필드 초기화
        }
      } catch (error) {
        // 네트워크 오류 등 예외 처리
        console.error('Error:', error);
      }
    }
  }

  // 엔터키 눌렀을때도 전송
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTodoList(e);
    }
  }

  return (
    <div className={searchContainer}>
      <input type="text" className={searchBar} placeholder="할 일을 입력해주세요" ref={searchInputRef}
        onKeyDown={handleKeyDown} />
      <button
        className={searchBtn}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleTodoList}
      >
        <Image src={isHovered ? plusW : plusB} alt="plus icon" />
        <span className={searchBtnText}>추가하기</span>
      </button>
    </div>
  )
}

export default Search