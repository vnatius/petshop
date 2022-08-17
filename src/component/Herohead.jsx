import React from "react";
import "../css/Herohead.css";

function Herohead() {
  return (
    <>
      <div className="parentpanel">
        <div className="leftpanel">
          <form action="" className="search">
            <input
              className="input"
              type="search"
              name=""
              id=""
              placeholder="Search..."
            />
          </form>
          <div className="middlepanel">
            <img
              src="https://images.pet-supermarket.co.uk/image/upload/v1619190194/logo/PScolourMOBILE.svg"
              alt=""
            />
          </div>
          <div className="rightpanel">
            <a href="#">
              <img src="./images/icon/user.png" alt="" />
            </a>
            <a href="#">
              <img src="./images/icon/heart.png" alt="" />
            </a>
            <a href="#">
              <img src="./images/icon/cart.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="bannerfoot">
        <div className="bf">
          <a href="#">For dogs</a>
          <a href="#">For cats</a>
          <a href="#" className="clear">
            For clearance
          </a>
        </div>
      </div>
    </>
  );
}

export default Herohead;
