import { useReducer } from 'react'
import './App.css'

/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + action.payload
    case 'DECREASE':
      return state - action.payload
    default:
      throw new Error('정의되어있지 않은 action입니다.')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'INCREASE', payload: 5 })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREASE', payload: 8 })}>감소</button>
    </>
  )
}

export default App
