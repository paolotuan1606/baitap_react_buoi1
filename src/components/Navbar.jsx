import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center m-2">
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-left me-2" />
          <p className="m-0">Overpreview Page</p>
        </div>
        <div>
          <div>
            <button className="btn rounded">
              <i className="fa-solid fa-display" />
            </button>
            <button className="btn rounded mx-2">
              <i className="fa-solid fa-tablet-screen-button" />
            </button>
            <button className="btn rounded">
              <i className="fa-solid fa-mobile-screen-button" />
            </button>
          </div>
        </div>
        <div>
          <div>
            <button className="btn rounded p-0">
              <i className="fa-brands fa-github" />
            </button>
            <button className="btn rounded  link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
              <i className="fa-solid fa-download"></i> Free Download
            </button>
            <button className="btn rounded p-0">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
