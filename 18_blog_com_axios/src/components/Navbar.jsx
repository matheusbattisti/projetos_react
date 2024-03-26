import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            Novo Post
          </Link>
        </li>
        <li>
          <Link to={`/admin`}>Gerenciar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
