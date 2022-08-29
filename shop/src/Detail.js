import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addProduct, changeCount } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function Detail(props) {
  const params = useParams();
  console.log(params.id);
  console.log(props.shoes);
  const [timer, setTimer] = useState(false);
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(0);
  const dispatch = useDispatch();
  const item = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    let localItem = JSON.parse(localStorage.getItem("watched"));
    localItem.push(Number(params.id));
    let setArr = [...new Set(localItem)];
    localStorage.setItem("watched", JSON.stringify(setArr));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 2000);
  }, []);

  function validation() {
    if (Number(value) || value === "") return null;
    else alert("숫자만 입력하세요");
  }
  useEffect(() => {
    validation();
  }, [value]);

  const filteredShoes = props.shoes.filter(
    (shoe) => shoe.id === Number(params.id)
  );

  console.log(item.product.filter((a) => a.id === filteredShoes[0].id + 3));

  console.log(filteredShoes);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {!timer ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div
        className="row"
        style={{
          display: "flex",
        }}
      >
        <div className="col-md-6">
          <img
            src={`${filteredShoes[0].url}`}
            width="100%"
            alt={`shoes${filteredShoes[0].id}`}
          />
        </div>
        <div
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <h4 className="pt-5">{filteredShoes[0].title}</h4>
          <p>{filteredShoes[0].content}</p>
          <p>{filteredShoes[0].price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              item.product.filter((a) => a.id === filteredShoes[0].id + 3)
                .length > 0
                ? dispatch(changeCount(filteredShoes[0].id + 3))
                : dispatch(
                    addProduct({
                      id: filteredShoes[0].id + 3,
                      name: `${filteredShoes[0].title}`,
                      count: 1,
                    })
                  );
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => setModal(0)} eventKey="link0">
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setModal(1)} eventKey="link1">
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setModal(2)} eventKey="link2">
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][modal]}
    </div>
  );
}
