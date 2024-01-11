import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="apple" />
          </li>
          <li>
            <a
              className="link-styled"
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Store
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Mac
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              iPad
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              iPhone
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Watch
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Airpods
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Tv & Home
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Entertainment
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Accessories
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: -0.01,
                lineHeight: "1", // Corrected syntax for line-height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                color: "#000000cc", // Ensure the color is in quotes
              }}
            >
              Support
            </a>
          </li>
          <li>
            <img src={Search} className="Searxh" />
          </li>
          <li>
            <img src={Store} className="Searxh" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
