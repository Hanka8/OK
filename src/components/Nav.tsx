import { Link } from "@tanstack/react-router";
import "./nav.css";

function Nav(): JSX.Element{
  return (
    <Link to="/" className="nav">
      <img src="../../assets/arrow-ico.svg" alt="Netflix Logo" className="nav__logo" />
    </Link>
  );
}

export default Nav;