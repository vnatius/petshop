import React from "react";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

//import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Home Loans</a>
          <a href="#">Agent Finder</a>
        </div>
        <div className="zillow">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Zillow-Logo-2019-present.jpg"
            alt="Zillowlogo"
          />
        </div>

        <div className="right">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Home Loans</a>
          <a href="#">Agent Finder</a>
        </div>
      </div>

      <div className="banner">
        <div className="bannerbody">
          <h1>Find it. Tour it. Own it.</h1>
          <div className="inputbanner">
            <input
              type="text"
              className="form"
              placeholder="Enter an address, neighbourhood, city or ZIP code"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="one">
          <div className="one-img">
            <img
              src="https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.webp"
              alt=""
            />
          </div>
          <h1>Buy a home</h1>
          <p>
            Zillow makes it easy to browse homes. When you’re ready, you can
            also connect with a local agent, explore financing solutions,
            schedule home
          </p>
          <button>Search homes</button>
        </div>
        <div className="one">
          <img
            src="https://www.zillowstatic.com/s3/homepage/static/Finance_a_home.webp"
            alt=""
          />
          <h1>Finance a home</h1>
          <p>
            Zillow makes it easy to take steps to find the right loan, so you
            can get the home you want.
          </p>
          <button>Search homes</button>
        </div>
        <div className="one">
          <img
            src="https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.webp"
            alt=""
          />
          <h1>Rent a home</h1>
          <p>
            We’re creating a seamless online experience – from shopping on the
            largest rental network, to applying, to paying rent.
          </p>
          <button>Search homes</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
