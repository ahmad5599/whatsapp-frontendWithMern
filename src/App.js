import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* <h1>༼ つ ◕_◕ ༽つLets gooo!!!(╯°□°）╯︵ ┻━┻</h1> */}
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
