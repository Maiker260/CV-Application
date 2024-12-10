import InputContainer from "../InputContainer"

import "../../../styles/edit-section/Form.css"

export default function AddEducation({ data, onChange }) {
    data = data.education;

    return (
        <div className="form flex-column">
            <InputContainer
                title="School:"
                type="text"
                placeholder="School/University"
                inputValue={data.school}
                onChange={onChange}
                dataSection="education"
                dataInfo="school"
            />
            <InputContainer
                title="Degree:"
                type="text"
                placeholder="Degree/Career"
                inputValue={data.degree}
                onChange={onChange}
                dataSection="education"
                dataInfo="degree"
            />
            <div className="dates education-dates">
                <InputContainer
                    title="Start Date:"
                    type="month"
                    placeholder="Start Date"
                    inputValue={data.startDate}
                    classInput="input-bar input-date"
                    onChange={onChange}
                    dataSection="education"
                    dataInfo="startDate"
                />
                <InputContainer
                    title="End Date:"
                    type="month"
                    placeholder="End Date"
                    inputValue={data.endDate}
                    classInput="input-bar input-date"
                    onChange={onChange}
                    dataSection="education"
                    dataInfo="endDate"
                />
            </div>
            <InputContainer 
                title="Description:"
                textArea={true}
                placeholder="Duties, Responsabilities, etc"
                inputValue={data.description}
                classInput="textarea education-textarea input-bar"
                onChange={onChange}
                dataSection="education"
                dataInfo="description"
            />
        </div>
    )
}