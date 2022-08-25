import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Shoe(props) {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="main-bg"></div>
      <Container className="container">
        <Row className="row">
          {props.shoes.map((product) => (
            <Col key={product.id}>
              {" "}
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
    </>
  );
}
