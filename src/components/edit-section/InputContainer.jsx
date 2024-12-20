import "../../styles/edit-section/InputContainer.css"

export default function InputContainer({
    classContainer = "input-container flex-column", 
    title, 
    type, 
    placeholder, 
    textArea = false, 
    classInput = "input-bar",
    inputValue,
    onChange,
    dataSection,
    dataInfo,
}) {
    
    const elementType = 
        textArea
            ? <textarea 
                placeholder={placeholder} 
                className={classInput} 
                onChange={onChange} 
                value={inputValue}
                data-section={dataSection}
                data-info={dataInfo}
                id={`${dataSection}${dataInfo}`}
              >
              </textarea>
              
            : <input 
                type={type} 
                placeholder={placeholder} 
                className={classInput} 
                onChange={onChange} 
                value={inputValue}
                data-section={dataSection}
                data-info={dataInfo}
                id={`${dataSection}${dataInfo}`}
              />

    return (
        <div className={classContainer}>
            <label className="input-label" htmlFor={`${dataSection}${dataInfo}`}>{title}</label>
            {elementType }
        </div>
    )
}