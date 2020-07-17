import React from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class Navbar extends Component {
//   render() {}
// }

export default Navbar;
