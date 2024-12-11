import Icons from "../icons"
import DisplayForm from "./Add-Information/DisplayForm";

import "../../styles/edit-section/EditInfoContainer.css"

export default function EditInfoContainer({ title, icon, content, buttons }) {
    let isHidden = true; 

    function showForm() {
        if (isHidden) {
            console.log("hola");
            isHidden = false;
                <DisplayForm 
                    content={content}
                    buttons={buttons}
                />
        } else {
            isHidden = true
            console.log("no")
        }
    }

    return (
        <section id={`${title}Form`} className="form-container personal-details flex-column" onClick={showForm}>
            <section className="title-group flex">
                <Icons 
                    pathInfo={icon}
                />
                <h2 className="form-title">{title}</h2>
            </section>
            <section className=""></section>
            {/* {content}
            {buttons} */}
        </section>
    )
}