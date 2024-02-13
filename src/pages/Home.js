import React from "react";
import jpeg from "../assets/catarmy.jpeg";

const Home = () => {
  return (
    <div className="background-container">
      <img
        src={jpeg}
        alt="Cat Army"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Home