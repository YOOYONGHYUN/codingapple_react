import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Shoe(props) {
  const navigate = useNavigate();
  console.log(props.shoes);
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="main-bg"></div>
      <Container className="container">
        <Row>
          {props.shoes.map((product) => (
            <Col
              key={product.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={`${product.url}`}
                width="80%"
                alt={`shoe${product.id}`}
              />
              <h4>{product.title}</h4>
              <p>{product.content}</p>
              <button onClick={() => navigate(`/detail/${product.id}`)}>
                상세정보
              </button>
            </Col>
          ))}
        </Row>
      </Container>
      {loading ? <div>Loading...</div> : null}
      <button
        onClick={() => {
          setLoading(true);
          setCount(count + 1);
          console.log(count);
          count > 3 && alert("더 이상 데이터가 없습니다.");
          axios
            .get(`https://codingapple1.github.io/shop/data${count}.json`)
            .then((result) => {
              console.log(count);
              props.setShoes([...props.shoes, ...result.data]);
              setLoading(false);
            })
            .catch(() => {
              "fail";
              setLoading(false);
            });
        }}
        style={{ marginTop: 50 }}
      >
        버튼
      </button>
    </div>
  );
}
