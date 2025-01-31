import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  //1. useEffect
  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200)
    }
    console.log('-- 3. Paint 직후')
  }, [value])

  //2. useLayoutEffect
  // useLayoutEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200)
  //   }
  //   console.log('--2. Paint 직전 = React 과정중 (2) Commit 직후')
  // }, [value])

  console.log('--1. React 과정 중 (1) Render 과정')

  return (
    <>
      <button onClick={() => setValue(0)}>value:{value}</button>
    </>
  )
}

export default App
