import { IoCaretBackSharp } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import "./nav.css";

function Nav(): JSX.Element{
  return (
    <Link to="/" className="nav">
      <img src="assets/logo.svg" alt="logo" className="nav__logo" />
      <IoCaretBackSharp color="white" size="30px" className="nav__back" />
    </Link>
  );
}

export default Nav;