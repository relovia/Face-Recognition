import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onButtonSubmit, onInputChange }) => {
  return (
    <div className="w-full max-w-xl mx-auto mt-10 ">
      <p className="lg:text-4xl sm:text-2xl text-center mb-3">
        {"This app will detect faces in your pictures. Give it a try."}
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="form flex justify-center p-10 shadow-2xl rounded-lg bg-white lg:w-1/2 ">
          <input
            onChange={onInputChange}
            type="text"
            placeholder="Enter a url"
            className="text-lg px-2 py-2 mb-2 lg:mb-0 lg:mr-2 w-full lg:w-3/4 rounded-lg border border-gray-300 outline-none focus:ring focus:border-indigo-700"
          />
          <button
            onClick={onButtonSubmit}
            className="w-1/4 py-2 ml-2 text-lg font-semibold text-white rounded-lg bg-indigo-500 hover:bg-indigo-700 hover:scale-110"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
