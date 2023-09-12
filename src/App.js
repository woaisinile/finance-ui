import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/login/Login";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
