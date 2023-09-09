import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, faceData }) => {
  return (
    <div className="flex justify-center items-start">
      <div className="relative mt-0">
        <div>
          <img
            id="inputImage"
            src={imageUrl}
            alt="face"
            className="h-auto"
            width="500px"
          />
        </div>
        {faceData.map((face, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              top: face.top,
              left: face.left,
              bottom: face.bottom,
              right: face.right,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
