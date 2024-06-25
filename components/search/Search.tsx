import plusB from "@/public/icons/plusB.svg"
import Image from "next/image"
import { searchBar, searchBtn, searchContainer } from "./search.css"
const Search = () => {
  return (
    <div className={searchContainer}>
      <input type="text" className={searchBar} placeholder="할 일을 입력해주세요" />
      <button className={searchBtn}>
        <Image src={plusB} alt="plus icon" />
        <span style={{ marginLeft: "4px" }}>추가하기</span>
      </button>
    </div>
  )
}

export default Search