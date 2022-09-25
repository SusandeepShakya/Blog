import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Setting } from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App() {
  const currentUser = true;
  return (
    <>
      <Topbar/>
      <Register/>
    </>
  );
}

export default App;
