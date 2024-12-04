import InputContainer from "./InputContainer"

export default function Experience() {
    return (
        <section className="form-container experience-section">
            <div className="title-group">
                <p>icon</p>
                <h2 className="form-title">Experience</h2>
            </div>
            <div className="form">
                <InputContainer
                    title="Company Name:"
                    type="text"
                    placeholder="Company Name"
                />
                <InputContainer
                    title="Title:"
                    type="text"
                    placeholder="Job Position Title"
                />
                <div className="dates experience-dates">
                    <InputContainer
                        title="Start Date:"
                        type="date"
                        placeholder="Start Date"
                        classInput="input-bar input-date"
                    />
                    <InputContainer
                        title="End Date:"
                        type="date"
                        placeholder="End Date"
                        classInput="input-bar input-date"
                    />
                </div>
                <InputContainer 
                    title="Description:"
                    textArea={true}
                    placeholder="Duties, Responsabilities, etc"
                    classInput="textarea experience-textarea"
                />
            </div>
        </section>
    )
}