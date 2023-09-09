import * as React from "react";

const Navigation = ({ onSignInClick, route }) => {
  return (
    <nav className="flex justify-end p-5">
      {route === "home" && (
        <p
          onClick={() => onSignInClick("signIn")}
          className="text-2xl opacity-100 transition-opacity  ease-in hover:opacity-50 underline p-4 cursor-pointer"
        >
          Sign Out
        </p>
      )}
    </nav>
  );
};

export default Navigation;
