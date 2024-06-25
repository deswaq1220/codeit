import Done from "@/components/done/Done";
import Search from "@/components/search/Search";
import Todo from "@/components/todo/Todo";
import './page.module.css';
export default function Home() {
  return (
    <div>
      <Search />
      <Todo />
      <Done />
    </div>
  );
}
