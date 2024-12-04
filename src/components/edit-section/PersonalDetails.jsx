import InputContainer from "./InputContainer"

export default function PersonalDetails({}) {
    return (
        <section className="form-container personal-details">
            <div className="title-group">
                <p>icon</p>
                <h2 className="form-title">Personal Details</h2>
            </div>
            <div className="form">
                <InputContainer
                    title="Full Name:"
                    type="text"
                    placeholder="Name LastName"
                />
                <InputContainer
                    title="Email:"
                    type="email"
                    placeholder="name@example.com"
                />
                <InputContainer
                    title="Phone Number:"
                    type="tel"
                    placeholder="+88-8888-8888"
                />
                <InputContainer
                    title="Address:"
                    type="text"
                    placeholder="City Country"
                />
            </div>
        </section>
    )
}