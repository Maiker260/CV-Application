export default function CvInfoDescription({ date, institution, position, description }) {
    return (
        <main className="cv-info-content">
            <section className="cv-info-dates">
                <p>{date}</p>
            </section>
            <section className="cv-info-description">
                <h5>{institution}</h5>
                <h6>{position}</h6>
                <p>{description}</p>
            </section>
        </main>
    )
}