import { useReducer } from 'react'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE_TEN':
      return state + 10
    case 'DECREASE_TEN':
      return state - 10
    default:
      throw new Error('정의되어있지 않은 action입니다.')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'INCREASE_TEN' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREASE_TEN' })}>감소</button>
    </>
  )
}

export default App
