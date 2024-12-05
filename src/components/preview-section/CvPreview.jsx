import CvInfoSection from "./CvInfoSection"

import "../../styles/preview-section/CvPreview.css"

export default function CvPreview({}) {
    return (
        <section className="cv-preview">
            <h2>PREVIEW:</h2>
            <header className="cv-header">
                <p>name</p>
                <p>email</p>
                <p>phone number</p>
                <p>location</p>
            </header>
            <main className="cv-content">
                <CvInfoSection 
                    title="Experience"
                    date="04/2018 - 02/2019"
                    institution="My Company"
                    position="Employee T2"
                    description="I work a lot for a lot of time."
                />
                <CvInfoSection 
                    title="Education"
                    date="04/2016 - 02/2018"
                    institution="My University"
                    position="Developer"
                    description="I study a lot for a lot of time."
                />
                <CvInfoSection 
                    title="Additional Information"
                    date="04/2016 - 02/2018"
                    institution="More Information"
                    position="More Information"
                    description="More Information"
                />
            </main>
        </section>
    )
}