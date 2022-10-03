import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  const navItem = [
    { text: "Home", link: "/", icon: "lnr-home" },
    { text: "About", link: "/about", icon: "lnr-user" },
    { text: "Resume", link: "/resume", icon: "lnr-graduation-hat" },
    { text: "Portfolio", link: "/portfolio", icon: "lnr-briefcase" },
    { text: "Blog", link: "/blog", icon: "lnr-book" },
    { text: "Contact", link: "/contact", icon: "lnr-envelope" },
  ];

  const route = useRouter();

  const [show, setShow] = useState(false);

  return (
    <>
      <header
        id="site_header"
        className={`header ${show ? "" : "mobile-menu-hide"} `}
      >
        <div className="header-content">
          <div className="header-photo">
            <img
              src="https://avatars.githubusercontent.com/u/108936433?v=4"
              alt="Alex Smith"
            />
          </div>
          <div className="header-titles">
            <h2>Darpan Chakraborty</h2>
            <h4>Web Designer</h4>
          </div>
        </div>

        {/* ===== Navigation menu ===== */}
        <ul className="main-menu">
          {navItem?.map((item, index) => (
            <li key={index}>
              <Link href={item?.link}>
                <a
                  onClick={() => setShow(false)}
                  className={`nav-anim ${
                    route.pathname == item.link ? "active" : ""
                  }`}
                >
                  <span className={`menu-icon lnr ${item?.icon}`}></span>
                  <span className="link-text">{item?.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* ===== Navigation menu end ===== */}

        <div className="social-links">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="header-buttons">
          <a href="#" target="_blank" className="btn btn-primary">
            Download CV
          </a>
        </div>

        <div className="copyrights">© 2020 All rights reserved.</div>
      </header>

      {/* <!-- Mobile Navigation --> */}
      <div
        onClick={() => setShow(!show)}
        className={`menu-toggle ${show ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <!-- End Mobile Navigation --> */}
    </>
  );
};

export default Header;
