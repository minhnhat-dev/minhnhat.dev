import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolio-list/PortfolioList";
import data from "../../data";
import "./portfolio.scss";

const itemsList = [
  {
    id: "#feature",
    title: "Feature",
  },
  {
    id: "#web_app",
    title: "Web App",
  },
  {
    id: "#mobile_app",
    title: "Mobile App",
  },
  {
    id: "#design",
    title: "Design",
  },
  {
    id: "#content",
    title: "Content",
  },
];

function Portfolio() {
  const [selectedId, setSelectedId] = useState("#feature");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const dataRenderById = data[selectedId] || [];
    setItems(dataRenderById);
  }, [selectedId]);

  return (
    <div className="portfolio" id="skills">
      <h1>My Skills</h1>
      <div className="content">
        {items.map((item) => (
          <div className="item" id={item.div}>
            <span>{item.title}</span>
            <img src={`${item.photoUrl}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
