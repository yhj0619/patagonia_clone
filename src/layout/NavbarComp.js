import { NavLink } from "react-router-dom";
import React from "react";
import { Router, Link } from "react-router-dom";

function NavbarComp() {
  return (
    <nav>
      {/* <h1>patagonia</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/detail">Detail</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/map">Map</NavLink>
        </li>
      </ul> */}
      <div className="bg-black ">
        <div className="flex justify-around px-4">
          <div>&nbsp;</div>
          <nav className="container mx-auto flex justify-center px-4 md:px-0 text-white">
            <h1>
              <div
                className="font-bold h-full flex justify-center items-center text-center"
                style={{ fontSize: "1.2rem", height: "4.8rem" }}
              >
                추석 연휴 배송 안내
              </div>
            </h1>
          </nav>
          <div className="hidden md:flex text-white ">
            <Link
              to={"/map"}
              className="font-bold flex justify-center items-center h-full text-center"
              style={{
                fontSize: "1.2rem",
                padding: "0 20px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                class="fa-solid fa-location-dot"
                style={{ marginRight: "8px" }}
              ></i>
              매장찾기
            </Link>
          </div>
        </div>
        <nav>
          <div className="flex justify-around bg-white">
            <div className="flex justify-center items-center">
              <Link to={"/"}>
                <img
                  src={require("../assets/images/logo_patagonia.jpg")}
                  alt="logo_patagonia"
                />
              </Link>
            </div>
            <ul className="before_list flex justify-center items-center">
              <li className="h-full relative flex justify-center items-center">
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  <NavLink to="/shop">Shop</NavLink>
                </a>
              </li>
              <li className="h-full relative flex justify-center items-center">
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  <NavLink to="/detail">Detail</NavLink>
                </a>
              </li>
              <li className="h-full relative flex justify-center items-center">
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  <NavLink to="/cart">Cart</NavLink>
                </a>
              </li>
              <li className="h-full relative flex justify-center items-center">
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  <NavLink to="/map">Map</NavLink>
                </a>
              </li>
            </ul>
            <div className="text-black block py-2">
              <ul className="flex justify-center items-center">
                <li className="p-5 hidden md:block">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </li>
                <li className="p-5">
                  <i class="fa-regular fa-user"></i>
                </li>
                <li className="p-5">
                  <i class="fa-regular fa-heart"></i>
                </li>
                <li className="p-5">
                  <i class="fa-solid fa-cart-shopping"></i>
                </li>
                <li className="p-5 hidden md:block">
                  <i class="fa-solid fa-bars"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default NavbarComp;
