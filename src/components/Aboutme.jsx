import React from "react";
import Navbar from "./Navbar";
function Aboutme() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen  p-6 animate-fadeIn">
        <div
          className=" p-6 rounded-lg shadow-lg max-w-auto mx-auto 
       h-auto sm:h-auto sm:w-2/4"
        >
          <h1 className="text-5xl font-bold mb-4 ">About :-</h1>
          <div className="flex flex-wrap items-start space-x-4">
            <p className=" flex-1">
              Welcome to TextUtils, my first project built with React! TextUtils
              is a simple yet powerful text manipulation tool designed to make
              your text editing tasks easier and more efficient. With TextUtils,
              you can quickly transform your text in various ways, such as
              converting text to uppercase, lowercase, and capitalized formats.
              Additionally, you can remove extra spaces, count words and
              characters, and much more. <br /> The primary goal of this project
              was to explore and harness the capabilities of React, a popular
              JavaScript library for building user interfaces. By creating
              TextUtils, I learned essential concepts of React, including
              components, state management, and props. The project also allowed
              me to delve into modern JavaScript (ES6+) and CSS for styling the
              application.
            </p>
          </div>
          <h2 className="underline flex-2 flexwrap">
            Key Features of TextUtils:
          </h2>

          <ul className="list-disc list-inside space-y-2 text-white">
            <li>
              <strong>Convert Text:</strong> Easily convert your text to
              uppercase, lowercase, or capitalized formats with a single click.
            </li>
            <li>
              <strong>Text Analysis:</strong> Get insights into your text, such
              as word count, character count.
            </li>
            <li>
              <strong>Remove Extra Spaces:</strong> Clean up your text by
              removing unnecessary spaces between words.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
