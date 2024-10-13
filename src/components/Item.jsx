import React from "react";

const Item = () => {
  let arr = [
    {
      i: <i className="bi bi-collection fs-2"></i>,
      h1: "Fresh new layout",
      p: "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      i: <i className="bi bi-cloud-download fs-2" />,
      h1: "Free to download",
      p: "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      i: <i className="bi bi-card-heading fs-2"></i>,
      h1: "Jumbotron hero header",
      p: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      i: <i className="bi bi-bootstrap fs-2" />,
      h1: "Feature boxes",
      p: "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      i: <i className="bi bi-code fs-2"></i>,
      h1: "Simple clean code",
      p: "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      i: <i className="bi bi-patch-check fs-2"></i>,
      h1: "A name you trust",
      p: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];

  function renderItem() {
    return arr.map((item, index) => {
      return (
        <div className="col col-12 col-lg-6 text-center  " key={index}>
          <div className="bg-light rounded p-5 position-relative mb-5">
            <div className="p-2 rounded bg-primary position-absolute start-50 top-0 translate-middle text-white  px-3">
              {item.i}
            </div>
            <h1 className="fs-4 fw-bold">{item.h1}</h1>
            <p className="fs-6">{item.p}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container mt-3">
      <div className="row g-5">{renderItem()}</div>
    </div>
  );
};

export default Item;
