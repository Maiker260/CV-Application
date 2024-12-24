export default function clearForm(data, setData ) {
    const clearedData = {
        ...data, personalDetails: { ...data.personalDetails, content: [{
            index: 0,
            fullName: "",
            email: "",
            phoneNumber: "",
            address : "",
        }]}
    }

    setData(clearedData)
}