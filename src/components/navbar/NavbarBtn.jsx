import Icons from "../icons"

import "../../styles/navbar/NavbarBtn.css";

export default function NavbarBtn({ title, icon }) {
    return (
        <div className="navbar-btn">
            <Icons 
                pathInfo={icon}
            />
            <h3 className="navbar-btn-title">{title}</h3>
        </div>
    )
}