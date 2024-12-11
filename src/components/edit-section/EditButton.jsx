import "../../styles/edit-section/EditButton.css"

export default function EditButton({ name, bgColor = null, icon = null, flex }) {
    
    const fontColor = bgColor
        ? "white"
        : null
    
    const buttonStyle = {
        backgroundColor: bgColor,
        color: fontColor,
        display: flex
    }

    const addIcon = icon 
        ? <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill={fontColor}><path d={icon}/></svg>
        : null

    return (
        <button className="edit-button" style={buttonStyle}>
            {addIcon}
            {name}
        </button>
    )
}