import React from "react";
import MenuItem from "../menu-items/MenuItem";
import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`menu ${menuOpen && "active"}`}>
            <ul>
                <MenuItem text="Home" id="#intro" setMenuOpen={setMenuOpen} />
                <MenuItem text="My Skills" id="#skills" setMenuOpen={setMenuOpen} />
                <MenuItem text="My Projects" id="#projects" setMenuOpen={setMenuOpen} />
                <MenuItem text="Testimonial" id="#testimonial" setMenuOpen={setMenuOpen} />
                <MenuItem text="Contact" id="#contact" setMenuOpen={setMenuOpen} />
            </ul>
        </div>
    );
}

export default Menu;
