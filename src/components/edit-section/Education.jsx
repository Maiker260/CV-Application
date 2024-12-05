import InputContainer from "./InputContainer"
import Icons from "../icons"

import "../../styles/edit-section/FormContainer.css"

export default function Education({}) {
    return (
        <section className="form-container education flex-column">
            <div className="title-group flex">
                <Icons 
                    pathInfo={"M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"}
                />
                <h2 className="form-title">Education</h2>
            </div> 
            <div className="form flex-column">
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
                    classInput="textarea education-textarea input-bar"
                />
            </div>
        </section>
    )
}