import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings, { Setting } from "./pages/setting/Setting";
import Single from "./pages/single/Single";


function App() {
  const currentUser = false;
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/register' element={currentUser?<Homepage/>:<Register />} />
          <Route exact path='/login' element={currentUser?<Homepage/>:<Login />} />
          <Route exact path='/write' element={currentUser?<Write/>:<Register />} />
          <Route exact path='/settings'  element={currentUser?<Setting/>:<Register />} />
          <Route exact path='/post/:postId' element={<Single/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
