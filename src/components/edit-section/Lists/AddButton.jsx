import "../../../styles/edit-section/Lists/AddButton.css"

export default function AddButton({ onClick, name, section }) {
    return (
        <button className="add-button" data-section={section} data-button="addButton" onClick={onClick}>{`New ${name}`}</button>
    )
}