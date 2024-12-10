import "../../styles/preview-section/CvInfoSection.css"

export default function CvInfoSection({ title, content }) {
    return (
        <section className="cv-info">
            <header className="cv-info-title-container">
                <h4 className="cv-info-title">{title}</h4>
            </header>
            {content}
        </section>
    )
}