import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/login/Login";
import MainLayout from "./views/layout/MainLayout";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login/>}></Route>
            <Route path={'mainLayout'} element={<MainLayout/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
