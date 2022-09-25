import "./sidebar.css";

export default function Sidebar() {
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
          <li className="sidebarListItem">
              Life
          </li>
          <li className="sidebarListItem">
              Music
          </li>
          <li className="sidebarListItem">
              Sport
          </li>
          <li className="sidebarListItem">
              Style
          </li>
          <li className="sidebarListItem">
              Tech
          </li>
          <li className="sidebarListItem">
              Cinema
          </li>
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
