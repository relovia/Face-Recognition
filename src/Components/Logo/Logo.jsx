import React from "react";
import face from "./face.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div className="lg:ml-10 m-4 mt-0">
      <Tilt perspective={false} tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div className="h-32 w-32 ml-10 p-2 cursor-pointer">
          <img src={face} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
