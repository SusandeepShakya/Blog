import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Creating a blog Using MERN </span>
        <span className="headerTitleLg">My first Mern Application</span>
      </div>
      <img
        className="headerImg"
        src="https://imgs.search.brave.com/inJSitOyW78TcVt8nj-m2zSPZZHw0yGDL2iJYjat2cc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/RG5WYy1JY29QMExY/VVU0X0pIVVZRSGFF/SyZwaWQ9QXBp"
        alt=""
      />
    </div>
  );
}