import Done from "@/components/done/Done";
import Search from "@/components/search/Search";
import Todo from "@/components/todo/Todo";
import { homeContainer, todoList } from "./home.css";
import './page.module.css';
export default function Home() {
  return (
    <div className={homeContainer}>
      <Search />
      <div className={todoList}>
        <Todo />
        <Done />
      </div>
    </div>
  );
}
