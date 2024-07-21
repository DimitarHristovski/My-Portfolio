import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <header className="container-fluid p-0 bg-transparent  ">
      <nav className="navbar  navbar-light d-flex justify-content-between  bg-transparent col-10 offset-1">
        <div className="d-flex">
          <a className="navbar-brand" href="#Hero">
            <img
              src="/Design/logoicon-removebg-preview.png"
              alt="Logo"
              width="40"
              height="40"
            />
          </a>
        </div>
        <button
          className="bg-transparent p-0 border-0 "
          onClick={(event) => {
            {
              toggleTheme();
            }
          }}
        >
          {theme === "day" ? (
            <img src="/Design/moon.png" alt="Night" width="50" height="50" />
          ) : (
            <img src="/Design/sun.png" alt="Day" width="50" height="50" />
          )}
        </button>
      </nav>
      <div id="Hero" className="bg-image ">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <p className="font-b text-light text-size text-center font-weight-bold w-50">
            Hello my name is <span className="header-color">Dimitar </span> and
            i am{" "}
            <span className="header-color mx-1">
              Front-end Developer and Designer
            </span>
            and this is my <span className="header-color">Web Portfolio!!</span>
          </p>
        </div>
      </div>{" "}
    </header>
  );
};

export default Header;
