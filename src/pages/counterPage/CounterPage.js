import { useDispatch, useSelector } from "react-redux";

const CounterPage = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <div>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default CounterPage;
