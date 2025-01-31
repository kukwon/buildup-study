import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 10)}>증가</button>
      <button onClick={() => setCount((prev) => prev - 10)}>감소</button>
    </>
  )
}

export default App
