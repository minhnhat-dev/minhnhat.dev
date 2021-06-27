import React from "react";

function MenuItem({ text, id, setMenuOpen }) {
    return (
        <li onClick={() => setMenuOpen(false)}>
            <a href={id}>{text}</a>
        </li>
    );
}

export default MenuItem;
