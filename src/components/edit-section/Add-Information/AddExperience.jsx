import InputContainer from "../InputContainer"

import "../../../styles/edit-section/Form.css"

export default function AddExperience({ data, onChange }) {
    return (
        <div className="form flex-column">
            <InputContainer
                title="Company Name:"
                type="text"
                placeholder="Company Name"
                inputValue={data.institution}
                onChange={onChange}
                dataSection="experience"
                dataInfo="institution"
            />
            <InputContainer
                title="Title:"
                type="text"
                placeholder="Job Position Title"
                inputValue={data.title}
                onChange={onChange}
                dataSection="experience"
                dataInfo="title"
            />
            <div className="dates experience-dates">
                <InputContainer
                    title="Start Date:"
                    type="month"
                    placeholder="Start Date"
                    inputValue={data.startDate}
                    classInput="input-bar input-date"
                    onChange={onChange}
                    dataSection="experience"
                    dataInfo="startDate"
                />
                <InputContainer
                    title="End Date:"
                    type="month"
                    placeholder="End Date"
                    inputValue={data.endDate}
                    classInput="input-bar input-date"
                    onChange={onChange}
                    dataSection="experience"
                    dataInfo="endDate"
                />
            </div>
            <InputContainer 
                title="Description:"
                textArea={true}
                placeholder="Duties, Responsabilities, etc"
                inputValue={data.description}
                classInput="textarea experience-textarea input-bar"
                onChange={onChange}
                dataSection="experience"
                dataInfo="description"
            />
        </div>
    )
}