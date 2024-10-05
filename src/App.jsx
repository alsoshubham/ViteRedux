// import { Counter } from "./Components/Counter";

import { useState } from "react";

const  App = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter +1;
    setCounter(counter)
    console.log(counter)
  }

  const subValue = () =>{
    counter = counter -1;
    setCounter(counter)
  }

  return (
    // <div><Counter/></div>
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className="justify-center item-center font-bold text-black text-2xl">Counter App</h1>
      <h2 className="text-black">counter value: {counter}</h2>
      <div className="p-10 mt-10 gap-5">
      <button className="bg-blue-400 hover:bg-violet-400 text-white font-bold py-2 px-4 rounded" onClick={addValue}
      >Increment</button>
      <p className="flex justify-center py-2 px-4">{counter}</p>
      <button className="bg-blue-400 hover:bg-violet-400 text-white font-bold py-2 px-4 rounded" onClick={subValue}>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App;
