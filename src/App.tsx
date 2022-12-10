import "./App.css";
import FetchComponent from "./components/FetchComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
