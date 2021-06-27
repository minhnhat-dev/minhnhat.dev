import React from "react";
import "./portfolioList.scss";

function PortfolioList({ active, id, title, selectedId, setSelectedId }) {
    console.log("id", id);
    console.log("selectedId", selectedId);
    return (
        <li
            className={active && "active"}
            onClick={() => setSelectedId(id)}
        >
            {title}
        </li>
    );
}

export default PortfolioList;
