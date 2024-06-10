import { useDispatch } from "react-redux";
import { addTodolist } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();

  const onSubmitData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");
    const content = formData.get("content");

    dispatch(addTodolist({ id: Date.now(), title, content, isDone: false }));
  };

  return (
    <form onSubmit={onSubmitData}>
      <label>제목: </label>
      <input type="text" name="title" /> <label>내용: </label>
      <input type="text" name="content" />
      <button type="submit">추가</button>
    </form>
  );
}
