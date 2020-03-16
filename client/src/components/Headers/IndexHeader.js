/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="homepage-header clear-filter" filter-color="blue">
        <div
          className="homepage-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/newVice.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        
      </div>
    </>
  );
}

export default IndexHeader;
