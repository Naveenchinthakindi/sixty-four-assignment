import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-home">
      <div>
        <Sidebar />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
