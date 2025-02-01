import { createContext, useContext, useState } from 'react'
import './App.css'

const ModalContext = createContext({
  show: (content) => {},
  close: () => {},
})

function ModalContextProvider({ children }) {
  const [modal, setModal] = useState({ open: false, content: <></> })

  function show(content) {
    setModal({ open: true, content })
  }
  function close() {
    setModal({ open: false, content: <></> })
  }

  return (
    <ModalContext.Provider value={{ show, close }}>
      {children}
      <dialog open={modal.open}>
        {modal.content}
        <button onClick={(e) => close()}>닫기</button>
      </dialog>
    </ModalContext.Provider>
  )
}

function ModalButton1() {
  const { show } = useContext(ModalContext)
  return <button onClick={(e) => show(<h3>Modal 1</h3>)}>1 열기</button>
}
function ModalButton2() {
  const { show } = useContext(ModalContext)
  return <button onClick={(e) => show(<h2>Modal 2</h2>)}>2 열기</button>
}
function ModalButton3() {
  const { show } = useContext(ModalContext)
  return <button onClick={(e) => show(<h1>Modal 3</h1>)}>3 열기</button>
}

function App() {
  return (
    <>
      <ModalContextProvider>
        <ModalButton1 />
        <ModalButton2 />
        <ModalButton3 />
      </ModalContextProvider>
    </>
  )
}

export default App
