import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const Side = () => {
  return (
    <>
      <div>
        <div className="divHeight  d-flex flex-column justify-content-evenly">
          <div className="text-center">
            <img
              src="https://shorturl.at/IHEBq"
              height="298px"
              width="298px"
              className="object-fit-cover"
            />
          </div>

          <div className="brandName">Eat "N" Drink</div>
          <div className="sloganName">Quality is our priority</div>
        </div>

        <div className="divHeight1 d-flex flex-column justify-content-around">
          <div className="brandName">Quick Links</div>
          <div>
            <ol className="olStyle d-flex flex-column justify-content-between">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <li>Home</li>
              </Link>
              <li>Your Orders</li>
              <li>Wallet</li>
              <li>Profile</li>
              <li>Logout</li>
            </ol>
          </div>
        </div>

        <div className="divHeight2">
          <div className="brandName mt-3">More About Us</div>
          <div>
            <ol className="olStyle1 d-flex flex-column justify-content-between">
              <li>Our blog</li>
              <li>Upcoming Dishes</li>
              <li>Our Story</li>
              <li>Social Media Links</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;
