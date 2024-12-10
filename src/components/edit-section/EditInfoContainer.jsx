import Icons from "../icons"

import "../../styles/edit-section/EditInfoContainer.css"

export default function EditInfoContainer({ title, icon, content }) {
    return (
        <section className="form-container personal-details flex-column">
            <div className="title-group flex">
                <Icons 
                    pathInfo={icon}
                />
                <h2 className="form-title">{title}</h2>
            </div>
            {content}
        </section>
    )
}