import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello everyone</h1>} />
        <Route path="/:category" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
