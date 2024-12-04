import CvInfoDescription from "./CvInfoDescription"

export default function CvInfoSection({ title, date, institution, position, description = null }) {
    return (
        <section className="cv-info">
            <header className="cv-info-title-container">
                <h4 className="cv-info-title">{title}</h4>
            </header>
            <CvInfoDescription 
                date={date}
                institution={institution}
                position={position}
                description={description}
            />
        </section>
    )
}