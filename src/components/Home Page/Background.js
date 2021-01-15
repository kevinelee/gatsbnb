import React from "react";
import airbnb from "../../images/airbnb bg.png";

export default function Background() {
  return (
    <div>
      <img className="w-full z-negative" src={airbnb} />
    </div>
  );
}
