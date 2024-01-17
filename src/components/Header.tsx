import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <header className="container-fluid p-0 bg-transparent ">
      <nav className="navbar  navbar-light d-flex justify-content-between mx-2 bg-transparent">
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
          className="bg-transparent p-0 border-0"
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
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => setModalShow(true)}
        >
          Hire Me
        </button>
      </nav>
      <div
        className={`modal fade  ${modalShow ? "show" : ""}`}
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style={{ display: modalShow ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content m-2 p-2">
            <div className="modal-body p-0">
              <div className="card border-0 text-center">
                <img
                  src="/Design/383234400_845980430252160_3076219510257099145_n-removebg-preview.png"
                  className="card-img-top m-auto"
                  alt="Profile"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">
                    Dimitar Hristovski
                  </h5>
                  <p className="card-text">
                    <strong>Front-end Developer and Designer</strong>
                  </p>
                  <p className="card-text">
                    Skills: JavaScript, ReactJS, UI/UX, SCSS, NextJS,
                    TypeScript, Bootstrap, Tailwind
                  </p>
                  <p className="card-text">
                    <b>Email:</b> dimihbt@yahoo.com
                  </p>
                  <div className="card-text m-0 d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/dimitar-hristovski-1711a9163"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>{" "}
                    </a>{" "}
                    <a
                      href="https://github.com/DimitarHristovski"
                      target="_blank"
                    >
                      <i className="fab fa-github fa-2x"></i>
                    </a>
                  </div>

                  <a
                    href="/DimitarHristosvskiCV.pdf"
                    download
                    className="btn btn-info text-light"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary m-auto w-25 "
              onClick={() => setModalShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div id="Hero" className="bg-image ">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <p className="font-b text-light text-size text-center font-weight-bold w-50">
            Hello my name is <span className="header-color">Dimitar </span> and
            i am{" "}
            <span className="header-color mx-1">
              Front-end Developer and Designer
            </span>
            and this is my <span className="header-color">Web Portfolio!</span>
          </p>
        </div>
      </div>{" "}
    </header>
  );
};

export default Header;
