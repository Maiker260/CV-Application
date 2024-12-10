import Icons from "../icons"

import "../../styles/preview-section/ContactDetails.css"

export default function ContactDetails({ info, icon, iconClass="contact-info-icon", classContactInfo }) {
    return (
        <div className="contact-details-container flex">
            <Icons 
                pathInfo={icon}
                classIcon={iconClass}
            />
            <p className={"contact-details" + " " + "no-margin" + " " + `${classContactInfo}`}>{info}</p>
        </div>
    )
}