import React, { useEffect, useState } from "react";
import Side from "./Side";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  console.log("hi");
  const [state, setState] = useState([]);
  let [data, setData] = useState([]);
  useEffect(() => {
    async function solve() {
      await getMenu();
      startOrderProcess();
    }
    solve();
  }, []);
  const getMenu = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
      );
      const data = (await res.json()) || [];
      setData(data);
      let img = [
        "https://surl.li/sfdzav",
        "https://surl.li/xurayk",
        "https://surl.li/ixbwfy",
      ];
      data.forEach((ele, i) => {
        if (i == 3) {
          return;
        } else {
          ele.imgSrc = img[i];
        }
      });

      let data1 = data.filter((ele, i) => {
        if (i < 3) {
          return ele;
        }
      });
      setState(data1);
    } catch (err) {
      setState("Data Not Found");
    }
  };

  const TakeOrder = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let burgers = data.filter((ele) =>
          ele.name.toLowerCase().includes("burger")
        );
        let datalength = [burgers[0], burgers[1], burgers[2]];
        // while (datalength.length < 3) {
        //   let random = burgers[Math.floor(Math.random() * burgers.length)];
        //   if (!datalength.includes(random)) {
        //     datalength.push(random);
        //   }
        // }
        console.log("response1");
        resolve({ items: datalength });
      }, 2500);
    });
  };

  const OrderPrep = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("response2");
        resolve({ order_status: "true", paid: "false" });
      }, 1500);
    });
  };

  const PayOrder = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("response3");
        resolve({ order_status: "true", paid: "true" });
      });
    }, 1000);
  };
  const ThankyouFnc = () => {
    alert("Thankyou for eating with us today!");
  };
  async function startOrderProcess() {
    try {
      const order = await TakeOrder();
      console.log("Order taken:", order);

      const prepStatus = await OrderPrep();
      console.log("Order prepared:", prepStatus);

      const paymentStatus = await PayOrder();
      console.log("Payment done:", paymentStatus);

      if (paymentStatus.paid) {
        ThankyouFnc();
      } else {
        alert("Not Found");
      }
    } catch (error) {
      console.error("Error in order process:", error);
    }
  }
  return (
    <>
      <div className="row row-cols-2 h-100 m-0">
        <div className="col-3 h-100 p-0">
          <Side />
        </div>
        <div className="col-9 p-0" style={{ backgroundColor: "#111315" }}>
          <Navbar />
          <div className="mx-2 mt-3" style={{ height: "400px" }}>
            <img
              src="https://shorturl.at/ywWdT"
              height="100%"
              width="100%"
              className="rounded-3"
            />
          </div>
          <Link
            to="/menu"
            className="mt-4 text-white mx-3 fs-5"
            style={{ backgroundColor: "#111315", textDecoration: "none" }}
          >
            Menu
          </Link>
          <div
            className="mt-4 mb-4 mx-3 row row-cols-3 gx-3"
            style={{ backgroundColor: "#111315" }}
          >
            {state.map((ele) => (
              <div
                className="rounded-3 col-3"
                style={{
                  height: 370,
                  width: "33.3%",
                  backgroundColor: "#111315",
                }}
                key={ele.id.toString()}
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
                      id={ele.id}
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

export default Home;
