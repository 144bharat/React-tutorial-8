import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.logo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.title}
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefheck-lault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-cabel text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                HtmlFor="flexSwitchCheckDefault"
              >
                Baby mujhe Dark krdo
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
