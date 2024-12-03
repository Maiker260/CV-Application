export default function PersonalDetails() {

    return (
        <div className="personal-details">
            <h2 className="section-title">Personal Details</h2>
            <div className="full-name">
                <label htmlFor="full-name">
                    <h3 className="input-title" name="full-name">Full Name:</h3>
                    <input type="text" name="full-name" className="input-bar" placeholder="Name LastName" />
                </label>
                <label htmlFor="email">
                    <h3 className="input-title" name="email">Email:</h3>
                    <input type="email" name="email" className="input-bar" placeholder="name@example.com" />
                </label>
                <label htmlFor="phone-number">
                    <h3 className="input-title" name="phone-number">Phone Number</h3>
                    <input type="number" name="phone-number" className="input-bar" placeholder="8888-8888" />
                </label>
                <label htmlFor="address">
                    <h3 className="input-title" name="address">Address:</h3>
                    <input type="text" name="address" className="input-bar" placeholder="City Country" />
                </label>
            </div>
        </div>
    )
}