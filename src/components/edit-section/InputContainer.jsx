import "../../styles/edit-section/InputContainer.css"

export default function InputContainer({
    classContainer = "input-container flex-column", 
    title, 
    type, 
    placeholder, 
    textArea = false, 
    classInput = "input-bar"
}) {
    
    const elementType = 
        textArea
            ? <textarea placeholder={placeholder} className={classInput}></textarea>
            : <input type={type} placeholder={placeholder} className={classInput} />

    return (
        <div className={classContainer}>
            <label className="input-label">{title}</label>
            {elementType}
        </div>
    )
}