import Icons from "../Icons"

import "../../styles/edit-section/EditInfoContainer.css"

export default function EditInfoContainer({ title, icon, content, onClick, section }) {
    return (
        <section id={`${section}Form`} data-section={section} className="form-container personal-details flex-column" >
            <section className="title-group flex" data-section={section} onClick={onClick}>
                <Icons 
                    pathInfo={icon}
                    section={section}
                />
                <h2 className="form-title" data-section={section}>{title}</h2>
            </section>
            {content}
        </section>
    )
}