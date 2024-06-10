import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodolist, toggleTodolist } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem() {
  const todolist = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  const onToggle = (id) => {
    dispatch(toggleTodolist(id));
  };

  const onDelete = (id) => {
    dispatch(deleteTodolist(id));
  };

  return (
    <ul>
      <li
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid black",
          width: "500px",
          height: "150px",
        }}
      >
        <section>
          <p>제목 : {item.title}</p>
          <p>내용 : {item.content}</p>
          <button onClick={() => onToggle(item.id)}>완료</button>
          <button onClick={() => onDelete(item.id)}>삭제</button>
        </section>
        <section></section>
      </li>
    </ul>
  );
}
