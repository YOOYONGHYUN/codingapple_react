import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  const [modal, setModal] = useState(false);
  const [good, setGood] = useState([0, 0, 0]);
  const [num, setNum] = useState(0);
  const [value, setValue] = useState("");

  console.log(value);

  function handleClick() {
    글제목변경([...글제목].sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={handleClick}>가나다순정렬</button>

      {글제목.map((a, i) => (
        <div className="list" key={i}>
          <h4
            onClick={() => {
              setNum(i);
              modal ? setModal(false) : setModal(true);
            }}
          >
            {a}
            <span
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...good];
                copy[i] = copy[i] + 1;
                setGood(copy);
              }}
            >
              Good
            </span>
            {good[i]}
          </h4>
          <p>2월 17일 발행</p>
          <button
            onClick={() => {
              let filter = [...글제목].filter((a) => a !== 글제목[i]);

              글제목변경(filter);
            }}
          >
            삭제
          </button>
        </div>
      ))}

      <form>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            글제목변경([value, ...글제목]);
            setGood([0, ...good]);
          }}
        >
          제출
        </button>
      </form>

      {modal ? (
        <Modal 글제목변경={글제목변경} 글제목={글제목} num={num} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  let { 글제목, 글제목변경, num } = props;
  return (
    <div className="modal">
      <h4>{글제목[num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
