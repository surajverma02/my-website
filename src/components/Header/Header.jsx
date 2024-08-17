import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <a
              className="text-white bg-gray-800 hover:bg-gray-600 font-semibold rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              href="/assets/Suraj_Resume.pdf"
              target="_blank"
            >
              Download CV
            </a>
          </div>
          <div
            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-black" : "text-gray-600"
                    } block text-lg font-bold py-2 px-3.5 duration-200 hover:text-black`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-black" : "text-gray-600"
                    } block text-lg font-bold py-2 px-3.5 duration-200 hover:text-black`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-black" : "text-gray-600"
                    } block text-lg font-bold py-2 px-1 duration-200 hover:text-black`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-black" : "text-gray-600"
                    } block text-lg font-bold py-2 px-3.5 duration-200 hover:text-black`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-black" : "text-gray-600"
                    } block text-lg font-bold py-2 px-1 duration-200 hover:text-black`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
