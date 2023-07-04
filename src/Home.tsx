import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, countType, incrementByValue } from "./state";
function Home() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState<number>(0);
  const data = useSelector<countType, countType["count"]>(
    (state) => state.count
  );
  const handleClick = () => {
    dispatch(incrementByValue(number));
  };
  // typing on LEFT hand side of =
  // const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setNumber(Number(e.currentTarget.value));
  // };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // const target = e.target as typeof e.target & {
    //   added: { value: number };
    // };
    setNumber(Number(e.currentTarget.value));
  };
  return (
    <div>
      <h1>{data}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <label htmlFor="valuefornumber"></label>
      <input
        type="text"
        onChange={handleChange}
        // onChange={(e) => setNumber(e.target.value)}
        // onChange={(e: React.SyntheticEvent) => {
        //   const target = e.target as typeof e.target & {
        //     added: { value: number };
        //   };
        //   setNumber(target.added.value);
        // }}

        title="enter value to add"
        id="valuefornumber"
        value={number}
        name="added"
      />
      <button onClick={handleClick}>add value</button>
    </div>
  );
}

export default Home;
