import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ title, isDone }) {
  const todolist = useSelector((state) =>
    state.todolist.filter((item) => item.isDone === isDone)
  );

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {todolist.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
