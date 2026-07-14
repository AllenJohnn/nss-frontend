import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./components/AddData";
import ViewAll from "./components/ViewAll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/view" element={<ViewAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;