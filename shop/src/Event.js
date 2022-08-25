import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Event() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>오늘의 이벤트</h1>
        <button onClick={() => navigate("/event/one")}>1</button>
        <button onClick={() => navigate("/event/two")}>2</button>
      </div>

      <Outlet></Outlet>
    </>
  );
}
