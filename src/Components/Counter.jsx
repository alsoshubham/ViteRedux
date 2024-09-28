import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/Slices/CounterSlice";

export const Counter = () => {

    // Use selector kisi bhi data ko fetch krne ki allowance deta hai
    const count = useSelector((state) => state.counter.value);
    const dispatch =  useDispatch();
  return (
    <div className="flex justify-center items-center gap-10">
        <button onClick={() => dispatch(increment())}
            className="bg-blue-400 hover:bg-violet-400 text-white font-bold py-2 px-4 rounded">
            Increment
        </button>
        <br />
        <br />
        <div className="py-2 px-4">{count}</div>
        <br />
        <br />
        <button onClick={() => dispatch(decrement())}
            className="bg-blue-400 hover:bg-violet-400 text-white font-bold py-2 px-4 rounded">
            Decrement
        </button>
    </div>
  )
}
