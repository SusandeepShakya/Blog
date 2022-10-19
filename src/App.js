import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/register' element={user?<Homepage/>:<Login />} />
          <Route exact path='/login' element={user?<Homepage/>:<Login />} />
          <Route exact path='/write' element={user?<Write/>:<Login/>} />
          <Route exact path='/settings'  element={user?<Setting/>:<Login />} />
          <Route exact path='/post/:postId' element={<Single/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
