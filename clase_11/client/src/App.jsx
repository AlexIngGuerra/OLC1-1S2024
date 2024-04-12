import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home texto="Home"/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
