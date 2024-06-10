import { useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";
import { decrement, increment } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState("0");

  const addNum = () => {
    dispatch(increment());
  };

  const minusNum = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />{" "}
        만큼을 <button onClick={addNum}>더할게요</button>{" "}
        <button onClick={minusNum}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
