'use client'
import plusB from "@/public/icons/plusB.svg";
import plusW from "@/public/icons/plusW.svg";
import Image from "next/image";
import { useState } from "react";
import { searchBar, searchBtn, searchBtnText, searchContainer } from "./search.css";
const Search = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={searchContainer}>
      <input type="text" className={searchBar} placeholder="할 일을 입력해주세요" />
      <button
        className={searchBtn}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={isHovered ? plusW : plusB} alt="plus icon" />
        <span className={searchBtnText}>추가하기</span>
      </button>
    </div>
  )
}

export default Search