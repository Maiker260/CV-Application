import "../../styles/preview-section/CvInfoDescription.css"

export default function CvInfoDescription({ date, institution, position, description }) {
    return (
        <main className="cv-info-content flex">
            <section className="cv-info-date-container">
                <p className="cv-info-date no-margin">{date}</p>
            </section>
            <section className="cv-info-description-container flex-column">
                <div className="company-role flex">
                    <h5 className="company-role-title no-margin">{institution}</h5>
                    <h5 className="no-margin">-</h5>
                    <h5 className="company-role-title no-margin">{position}</h5>
                </div>
                <p className="cv-info-description no-margin">{description}</p>
            </section>
        </main>
    )
}