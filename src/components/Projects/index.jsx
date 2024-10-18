import React, { useEffect, useRef, useState } from "react";
import "./project.css";
import { sumArray } from "../../helper";
import { projects } from "../../data";
import Card from "./Card";

const tabs = [
  { name: "All" },
  { name: "Web" },
  { name: "UI/UX" },
  { name: "Apps" },
];



function Projects() {
  const [displayproject, setdisplayproject] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIcatorWidth] = useState(0);
  const itemsEls = useRef(new Array());

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArray(prevEl.map((item) => item.offsetWidth)));
    setIcatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  const setprojects = (category) => {
    if ((category = "All")) {
      return setdisplayproject(projects);
    }
    const pro = projects.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setdisplayproject(pro);
  };

  return (
    <section id="projects">
      <div className="section__wrapper project__container">
        <div className="section__header center">
          <h2 className="primary__title"> Projects</h2>
        </div>
        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setprojects(tab.name);
              }}
              key={index}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active__indicator"
            style={{ left: `${offset}px`, width: `${indicatorWidth}px` }}
          ></span>
        </nav>
        <div className="card__container">
         {displayproject.map((project, index) => (
          <Card
          title={project.title}
          image={project.image}
          demoLink={project.demoLink}
          data={project.data}
          key={index}
          ></Card>
         ))}
         
         
        </div>
      </div>
    </section>
  );
}

export default Projects;
