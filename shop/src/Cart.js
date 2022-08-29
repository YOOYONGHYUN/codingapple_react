import { React, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeName, changeCount, minusProduct, removeProduct } from "./store";

export default function Cart(props) {
  const dispatch = useDispatch();
  const [count, setCount] = useState([1, 1, 1]);
  console.log(count[2]);
  const remove = (value) => {
    props.handleRemove(value);
  };

  let item = useSelector((state) => {
    return state;
  });
  console.log(item.product);

  console.log(props.cart);
  return (
    <>
      <div>{item.user}의 카트</div>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        change
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {item.product.map((cart, i) => (
            <tr key={cart.id}>
              <td>{cart.id}</td>
              <td>{cart.name}</td>
              <td>{cart.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeCount(cart.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    if (cart.count > 0) dispatch(minusProduct(cart.id));
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    dispatch(removeProduct(cart.id));
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
