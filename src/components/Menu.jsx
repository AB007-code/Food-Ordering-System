import React, { useEffect, useState } from "react";
import Side from "./Side";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Menu = () => {
  let [burgerData, setBurger] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data1 = [];
    let res = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    let data = await res.json();
    data[0].imgSrc = "https://surl.li/xurayk";
    for (let i = 0; i < 6; i++) {
      data1.push(data[0]);
    }
    setBurger(data1);
  };
  //   console.log(burgerData);
  return (
    <>
      <div className="row row-cols-2 h-100 m-0">
        <div className="col-3 h-100 p-0">
          <Side />
        </div>
        <div className="col-9 p-0" style={{ backgroundColor: "#111315" }}>
          <Navbar />

          <div className="mt-3 mx-2" style={{ backgroundColor: "#111315" }}>
            {" "}
            <Link
              to="/menu"
              className="text-white mx-3  fs-5"
              style={{
                backgroundColor: "#111315",
                textDecoration: "none",
              }}
            >
              Menu
            </Link>
          </div>
          <div
            className="mt-4 mb-4 mx-3 row row-cols-3 g-3"
            style={{ backgroundColor: "#111315" }}
          >
            {burgerData.map((ele, i) => (
              <div
                className="rounded-3 col-4"
                style={{
                  height: 370,
                  width: "33.3%",
                  backgroundColor: "#111315",
                }}
                key={i}
              >
                <div
                  className="rounded-3 h-100"
                  style={{ backgroundColor: "#191D20" }}
                >
                  <div
                    className="h-75 rounded-3 p-2"
                    style={{ backgroundColor: "#191D20" }}
                  >
                    <img
                      src={ele.imgSrc}
                      width="100%"
                      height="100%"
                      alt="food"
                      className="rounded-3"
                    />
                  </div>

                  <div
                    className="mt-3 d-flex justify-content-between"
                    style={{ backgroundColor: "#191D20" }}
                  >
                    <div style={{ backgroundColor: "#191D20" }}>
                      <div
                        className="text-white px-4 fs-5"
                        style={{ backgroundColor: "#191D20" }}
                      >
                        {ele.name}
                      </div>
                      <div
                        className="text-white px-4 fs-6"
                        style={{ backgroundColor: "#191D20" }}
                      >
                        ${ele.price}/-
                      </div>
                    </div>
                    <div
                      className="text-white btn mx-3  d-flex flex-wrap justify-content-center align-content-center"
                      style={{
                        height: "30px",
                        width: "1px",
                        fontSize: "1.5em",
                        marginTop: "12px",
                      }}
                      id={i}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
