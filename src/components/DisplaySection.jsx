import React from "react";

function DisplaySection({triggerPreview}) {
  const handlScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  }
    return (
      <div className="display-section wrapper">
        <h2 className="title">New</h2>
        <p className="text">brilliant</p>
        <span className="description">
          A dispay that 10x brighter than venus
        </span>
        <button className="button" onClick={triggerPreview}>Try me!</button>
        <button className="back-button" onClick={handlScrollToTop}>
          TOP
        </button>
      </div>
    );
  };
export default DisplaySection;
