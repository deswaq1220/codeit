import { searchBar } from "./search.css"

const Search = () => {
  return (
    <>
      <input type="text" className={searchBar} placeholder="할 일을 입력해주세요" />
    </>
  )
}

export default Search