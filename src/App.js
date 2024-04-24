import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex">
      <div style={{height:'100vh'}}>
        <Sidebar />
      </div>
      <div className="">
        <Home />
      </div>
    </div>
  );
}

export default App;
