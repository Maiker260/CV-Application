import InputContainer from "../InputContainer"

import "../../../styles/edit-section/Form.css"

export default function AddMoreInfo({ data, onChange }) {
    return (
        <div className="form flex-column">
            <InputContainer
                title="School/Institution:"
                type="text"
                placeholder="School/Institution"
                inputValue={data.institution}
                onChange={onChange}
                dataSection="moreInfo"
                dataInfo="institution"
            />
            <InputContainer
                title="Degree/Career/Course:"
                type="text"
                placeholder="Degree/Career/Course"
                inputValue={data.title}
                onChange={onChange}
                dataSection="moreInfo"
                dataInfo="title"
            />
            <div className="dates education-dates">
                <InputContainer
                    title="Start Date:"
                    type="month"
                    placeholder="Start Date"
                    inputValue={data.startDate}
                    classInput="input-bar input-date"
                    onChange={onChange}
                    dataSection="moreInfo"
                    dataInfo="startDate"
                />
                <InputContainer
                    title="End Date:"
                    type="month"
                    placeholder="End Date"
                    inputValue={data.endDate}
                    classInput="input-bar input-date"
                    onChange={onChange}
                    dataSection="moreInfo"
                    dataInfo="endDate"
                />
            </div>
            <InputContainer 
                title="Description:"
                textArea={true}
                placeholder="Duties, Responsabilities, etc"
                inputValue={data.description}
                classInput="textarea moreInfo-textarea input-bar"
                onChange={onChange}
                dataSection="moreInfo"
                dataInfo="description"
            />
        </div>
    )
}