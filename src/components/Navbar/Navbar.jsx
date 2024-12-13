import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <button className="btn btn-dark">
            <NavLink to={"/"} style={{ textDecoration: "none" }}>
              Home Page
            </NavLink>
          </button>
        </li>
        <li>
          <button className="btn btn-dark">
            <NavLink to={"/about"} style={{ textDecoration: "none" }}>
              About Us
            </NavLink>
          </button>
        </li>
        <li>
          <button className="btn btn-dark">
            <NavLink to={"/posts"} style={{ textDecoration: "none" }}>
              My Posts
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}
