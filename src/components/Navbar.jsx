import React from "react";
import "../index.css";
const Navbar = () => {
  return (
    <>
      <div
        className="d-flex flex-wrap align-content-center"
        style={{ height: "83px", width: "100%", backgroundColor: "#191D20" }}
      >
        <div
          className="col-7"
          style={{ height: "46px", backgroundColor: "#191D20" }}
        >
          <input
            placeholder="        Search Food Item"
            className="h-100 border-0 fs-5"
            style={{
              width: "94%",
              margin: "0px 0px 0px 3%",
              borderRadius: "5px",
              backgroundColor: "#272A30",
              color: "white",
            }}
          />
          <span className="fs-4 span" style={{ backgroundColor: "#272a30" }}>
            🔍︎
          </span>
        </div>
        <div
          className="col-2"
          style={{ height: "46px", backgroundColor: "#191D20" }}
        >
          <button
            className="btn h-100"
            style={{
              width: "90%",
              margin: "0px 0px 0px 5%",
              borderRadius: "5px",
              backgroundColor: "#ff2424",
              color: "white",
            }}
          >
            Signup
          </button>
        </div>
        <div
          className="col-2"
          style={{ height: "46px", backgroundColor: "#191D20" }}
        >
          <button
            className="btn h-100"
            style={{
              width: "90%",
              margin: "0px 0px 0px 5%",
              borderRadius: "5px",
              backgroundColor: "#ff2424",
              color: "white",
            }}
          >
            Login
          </button>
        </div>
        <div
          className="col-1 text-center"
          style={{ height: "46px", backgroundColor: "#191D20" }}
        >
          <img
            height="45px"
            width="45px"
            className="object-fit-contain"
            src="https://shorturl.at/IHEBq"
            style={{ backgroundColor: "#191D20" }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
