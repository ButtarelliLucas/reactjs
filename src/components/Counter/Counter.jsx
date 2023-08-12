import { useState } from "react"



const Counter = () => {
    const [count, setCount] = useState(0)
    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () => {
        setCount(count - 1)
    }

  return (
<div>
    <div className="rounded-full p-1 text-gray-900">{count}</div>
    {/* <button className="bg-black text-white rounded-lg" onClick={restar}>-</button>
    <button className="bg-black text-white rounded-lg" onClick={sumar}>+</button> */}

</div>
  )
}


export default Counter