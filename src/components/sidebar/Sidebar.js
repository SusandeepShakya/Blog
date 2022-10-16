import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://imgs.search.brave.com/bOKdC6F2w9g0b6a1Bo75ZCgLm8wRzC7fbrziKQWdd4U/rs:fit:667:669:1/g:ce/aHR0cHM6Ly9pbWdz/LmllL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4L2dvdmVy/bm1lbnQtZTE1OTc5/MTY5MjkxOTAuanBn"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">
                {c.name}
              </li>
            </Link>

          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
