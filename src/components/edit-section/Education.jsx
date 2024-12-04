import InputContainer from "./InputContainer"

export default function Education({}) {
    return (
        <section className="form-container education">
            <div className="title-group">
                <p>icon</p>
                <h2 className="form-title">Education</h2>
            </div> 
            <div className="form">
                <InputContainer
                    title="School:"
                    type="text"
                    placeholder="School/University"
                />
                <InputContainer
                    title="Degree:"
                    type="text"
                    placeholder="Degree/Career"
                />
                <div className="dates education-dates">
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
                    classInput="textarea education-textarea"
                />
            </div>
        </section>
    )
}