import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-dark ">
        <div className="container">
          <a className="navbar-brand text-white">Start Bootstrap</a>
          <form className="d-flex text-white ">         
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link mx-3 text-secondary" href="#">
                About
              </a>
              <a className="nav-link text-secondary" href="#">
                Contact
              </a>
            
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
