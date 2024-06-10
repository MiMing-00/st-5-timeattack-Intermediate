import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const todolist = useSelector((state) => state.todolist);

  return (
    <section>
      <h2>Working...</h2>
      <ul>
        {" "}
        {todolist.map((item) => (
          <TodoItem key={item.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
