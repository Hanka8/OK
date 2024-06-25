import { IoCaretBackSharp } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import "./nav.css";

function Nav(): JSX.Element{
  return (
    <Link to="/" className="nav">
      <IoCaretBackSharp color="white" size="30px" className="nav__back" />
    </Link>
  );
}

export default Nav;