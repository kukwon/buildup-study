import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './App.css'

const ModalContext = createContext({
  show: (content) => {},
  close: () => {},
})

function Modal({ label, children: content }) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        dialogRef.current.showModal()
      } else {
        dialogRef.current.close()
      }
    }
  }, [open])

  return (
    <>
      <button onClick={(e) => setOpen(true)}>{label}</button>
      {open &&
        createPortal(
          <dialog ref={dialogRef} onClose={(e) => setOpen(false)}>
            {content}
            <button onClick={(e) => setOpen(false)}>닫기</button>
          </dialog>,
          document.body,
        )}
    </>
  )
}

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
      {modal.open &&
        createPortal(
          <dialog open>
            {modal.content}
            <button onClick={(e) => close()}>닫기</button>
          </dialog>,
          document.body,
        )}
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
        <Modal label='4 열기'>
          <h3>Modal 4</h3>
        </Modal>
      </ModalContextProvider>
    </>
  )
}

export default App
