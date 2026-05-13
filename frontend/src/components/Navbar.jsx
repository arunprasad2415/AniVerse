import { Link }
from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">

      <Link to="/" className="logo"> AniVerse </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <a href="/trending">
          Trending
        </a>

        <a href="/explore">
          Explore
        </a>

        <Link to="/ai">
          AI Picks
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;