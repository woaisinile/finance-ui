import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/login/Login";
import MainLayout from "./views/layout/MainLayout";
import UserInfo from "./views/userMange/userInfo/UserInfo";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login/>}/>
            <Route path={'mainLayout'} element={<MainLayout/>}>
                <Route path={'userInfo'} element={<UserInfo/>} />
            </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
