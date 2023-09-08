import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/metalurgicaCamsa/build" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
