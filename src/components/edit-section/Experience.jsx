import InputContainer from "./InputContainer"
import Icons from "../icons"

import "../../styles/edit-section/FormContainer.css"

export default function Experience() {
    return (
        <section className="form-container experience-section flex-column">
            <div className="title-group flex">
                <Icons 
                    pathInfo={"M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"}
                />
                <h2 className="form-title">Experience</h2>
            </div>
            <div className="form flex-column">
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
                    classInput="textarea experience-textarea input-bar"
                />
            </div>
        </section>
    )
}