import React, { useEffect, useState } from "react";
import "./fact.css";
import Odometer from "react-odometerjs";

function Facts() {
  const [experience, Setexperience] = useState(0);
  const [project, Setproect] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      Setexperience(0);
      Setproect(5);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="fact__container">
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={experience} />
          <span className="indicator"></span>
        </div>
        <p className="name">Years Of Experience</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={project} />
        </div>
        <p className="name">Complate Projects</p>
      </div>
    </div>
  );
}

export default Facts;
