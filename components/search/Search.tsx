'use client'
import plusB from "@/public/icons/plusB.svg";
import plusW from "@/public/icons/plusW.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { searchBar, searchBtn, searchBtnText, searchContainer } from "./search.css";

interface SearchProps {
  addTodoItem: (name: string) => void;
}

const Search = ({ addTodoItem }: SearchProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  //todo post 요청 
  const handleTodoList = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if (searchInputRef.current) {
      const enteredSearch = searchInputRef.current.value;
      addTodoItem(enteredSearch);
      searchInputRef.current.value = ""; // 입력 필드 초기화
    }
  };


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