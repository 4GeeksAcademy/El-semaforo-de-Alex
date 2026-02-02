import React, { useState } from "react";

export default function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="trafficTop">
      <div className="trafficBody">
        <div
          className={`light red ${color === "red" ? "active" : ""}`}
          onClick={() => setColor("red")}
        ></div>

        <div
          className={`light yellow ${color === "yellow" ? "active" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>

        <div
          className={`light green ${color === "green" ? "active" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
}
