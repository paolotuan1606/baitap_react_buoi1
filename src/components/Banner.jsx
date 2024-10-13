import React from "react";

const Banner = () => {
  return (
    <div className="text-center container mb-5 py-3 ">
      <div className="bg-light p-5 mt-5 rounded h-100 rounded">
        <h1 className="fs-1 fw-bold mt-5">A Warm Welcome!</h1>
        <p className="fs-4 px-5">
          Bootstrap utility classes are used to create this jumbotron since the
          old <br />
          component has been removed from the framework. Why create custom CSS{" "}
          <br /> when you can use utilities?
        </p>
        <button className="btn btn-primary fs-5 mb-5">Call to action</button>
      </div>
    </div>
  );
};

export default Banner;
