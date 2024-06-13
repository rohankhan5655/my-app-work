import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-c3e50 rounded-lg shadow m-4 dark:bg-gray-800 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-white">
          © 2024{" "}
          <a
            href="https://www.linkedin.com/in/rohan-gg-505467284/"
            className="hover:underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            M.Rohan Khan
          </a>
          . All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-white">
          <li>
            <Link to="/Home" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
