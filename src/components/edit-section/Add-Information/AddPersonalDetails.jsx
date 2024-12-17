import InputContainer from "../InputContainer"

import "../../../styles/edit-section/Form.css"

export default function AddPersonalDetails({ data, onChange }) {
    data = data.personalDetails.content[0];

    return (
        <div className="form flex-column">
            <InputContainer
                title="Full Name:"
                type="text"
                placeholder="Name LastName"
                inputValue={data.fullName}
                onChange={onChange}
                dataSection="personalDetails"
                dataInfo="fullName"
            />
            <InputContainer
                title="Email:"
                type="email"
                placeholder="name@example.com"
                inputValue={data.email}
                onChange={onChange}
                dataSection="personalDetails"
                dataInfo="email"
            />
            <InputContainer
                title="Phone Number:"
                type="tel"
                placeholder="+88-8888-8888"
                inputValue={data.phoneNumber}
                onChange={onChange}
                dataSection="personalDetails"
                dataInfo="phoneNumber"
            />
            <InputContainer
                title="Address:"
                type="text"
                placeholder="City Country"
                inputValue={data.address}
                onChange={onChange}
                dataSection="personalDetails"
                dataInfo="address"
            />
        </div>
    )
}