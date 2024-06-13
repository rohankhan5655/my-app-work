import React, { useState } from "react";
import "../components/Textform.css";
import "../components/Alert";
import Navbar from "./Navbar";
export default function Home(props) {
  const [fontFamily, setFontFamily] = useState("Arial"); //to change the font style in the textarea
  const handleFontChange = (event) => {
    setFontFamily(event.target.value);
  };
  // <-- funtion to ToUpperCase Text --->
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted toUpperCase !", "success");
  };
  // <-- funtion to Clear Text --->
  const Cleartext = () => {
    setText("");
    props.showAlert("Text Cleared succesfully!", "success");
  };
  // <-- funtion to TolowerCase Text --->
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted toLowerCase!", "success");
  };
  // <-- funtion to HandleonChange on Textarea --->
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // <-- funtion to Copy Text --->
  const Copyme = (event) => {
    var texta = document.getElementById("textarea");
    texta.select();
    navigator.clipboard.writeText(texta.value);
    props.showAlert("Text copied succesfully!", "success");
  };
  // <-- funtion to Remove Etra spaces on Text --->
  const Removespace = () => {
    setText(text.trim().replace(/\s+/g, " "));
    props.showAlert("Extraspaces Removed!", "success");
  };
  // useState
  const [text, setText] = useState("");

  return (
    <>
      <div className="animate-fadeIn">
        <Navbar />
        <br />
        <h2 className="animate-bounce origin-top text-center text-5xl ">
          welcome <br /> My TextUtils App
        </h2>
        <div className="form-container mx-auto flex justify-center ">
          <form className="form">
            <div className="form-group ">
              <textarea
                placeholder="Enter Your Text here...."
                name="textarea"
                id="textarea"
                rows="10"
                style={{ fontFamily }}
                cols="50"
                onChange={handleOnChange}
                value={text}
                className="w-full sm:w-auto"
              ></textarea>
            </div>
          </form>
        </div>
        <div className=" justify-center items-center  text-center p-6 ">
          <button
            type="button"
            onClick={handleUpClick}
            className="mx-2 my-2 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            ToUpperCase
          </button>
          <button
            type="button"
            onClick={handleLowerClick}
            className="mx-2 my-2 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            ToLowerCase
          </button>
          <button
            type="button"
            onClick={Copyme}
            className="mx-2 my-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Copy Text
          </button>
          <button
            type="button"
            onClick={Cleartext}
            className="mx-2 my-2 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Clear Text
          </button>
          <div>
            <div className=" justify-center items-center  text-center p-6 ">
              <button
                onClick={Removespace}
                type="button"
                className="mx-2 my-2 text-white bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Remove Extra Spaces
              </button>

              <select
                id="fontSelect"
                value={fontFamily}
                onChange={handleFontChange}
                className=" mx-2 my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <option value="Arial">Change Font Style... </option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
                <option value="serif">Serif</option>
                <option value="cursive">Cursive</option>
              </select>
            </div>
            <h2 className="mx-auto text-center  text-6xl text-[#ecf0f1] text-shadow m-[20px_40px] ">
              Your Text Summary
            </h2>
            <p>
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== +0;
                }).length
              }{" "}
              words and {text.length} characters{" "}
            </p>
          </div>
        </div>
        <h2>Preview Your Text here</h2>
        <div className="mx-auto flex flex-col sm:flex-row bg-gray-900 rounded-xl p-2.5 h-[47vh] sm:h-47 sm:w-1/2">
          <div className="card__content overflow-hidden">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
