import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'

const Validation = memo(function Validation({ valid }) {
  console.log('-rerenderd: Validation')
  return <div>{valid ? <p>성년입니다</p> : <p style={{ color: 'red' }}>미성년입니다</p>}</div>
})

const Button = memo(function Button({ onClick }) {
  console.log('-rerenderd: Button')
  return <button onClick={onClick}>증가</button>
})

function App() {
  const [age, setAge] = useState(0)

  const valid = useMemo(() => {
    console.log('calculated')
    return age >= 19 ? true : false
  }, [age >= 19])

  const increase = useCallback(() => {
    setAge((previous) => previous + 1)
  }, [])

  return (
    <>
      <p>{age}</p>
      <Validation valid={valid} />
      <Button onClick={increase} />
    </>
  )
}

export default App
