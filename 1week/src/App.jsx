import "./App.css";

function UsernameInput() {
  return (
    <div>
      Username: <input />
    </div>
  );
}

function PasswordInput() {
  return (
    <div>
      PassWorkd: <input type="password" />
      <button>🔒 보이기</button>
    </div>
  );
}

function App() {
  return (
    <>
      <UsernameInput />
      <PasswordInput />
    </>
  );
}

export default App;
