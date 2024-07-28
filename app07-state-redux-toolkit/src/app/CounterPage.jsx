import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function CounterPage() {
  const count = useSelector((state) => state.counter.value);
  const disPatch = useDispatch();

  return (
    <div>
      CounterPage "{count}" 
      <button className="btn" onClick={() => disPatch(increment())}> + </button>
      <button className="btn" onClick={() => disPatch(decrement())}> - </button>
      <button className="btn" onClick={() => disPatch(incrementByAmount(5))}> TWST </button>
      
    </div>
  );
}
