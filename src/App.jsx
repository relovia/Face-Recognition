import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
// import Rank from "./Components/Rank/Rank";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [faceData, setFaceData] = useState([]);
  const [route, setRoute] = useState("signIn");

  const calculateFaceLocation = (face) => {
    const clarifaiFace = face.region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      top: clarifaiFace.top_row * height,
      left: clarifaiFace.left_col * width,
      bottom: height - clarifaiFace.bottom_row * height,
      right: width - clarifaiFace.right_col * width,
    };
  };

  const displayFaceBox = (faces) => {
    setFaceData(faces);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSignInClick = (newRoute) => {
    setRoute(newRoute);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);

    const PAT = "YOUR_PAT_HERE";
    const USER_ID = "YOUR_CLARIAFI_ID";
    const APP_ID = "YOUR_APP_ID";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
    const IMAGE_URL = input;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const faces = result.outputs[0].data.regions.map((region) => {
          return calculateFaceLocation(region);
        });
        displayFaceBox(faces);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <ParticlesBg type="polygon" bg={true} />
      <Navigation onSignInClick={onSignInClick} route={route} />
      <div>
        {route === "home" ? (
          <div>
            <Logo />
            {/* <Rank /> */}
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} faceData={faceData} />
          </div>
        ) : route === "signIn" ? (
          <SignIn onSignInClick={onSignInClick} />
        ) : (
          <Register onSignInClick={onSignInClick} />
        )}
      </div>
    </div>
  );
};

export default App;
