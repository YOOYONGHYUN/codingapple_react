import React from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  const params = useParams();
  console.log(params.id);
  console.log(props.shoes);

  const filteredShoes = props.shoes.filter(
    (shoe) => shoe.id === Number(params.id)
  );
  console.log(filteredShoes);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${filteredShoes[0].url}`}
            width="100%"
            alt={`shoes${filteredShoes[0].id}`}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{filteredShoes[0].title}</h4>
          <p>{filteredShoes[0].content}</p>
          <p>{filteredShoes[0].price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.handleCart(filteredShoes[0].title);
            }}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}
