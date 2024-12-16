import "../../../styles/edit-section/Lists/AddButton.css"

export default function AddButton({ onClick, name }) {
    return (
        <button className="add-button" onClick={onClick}>{`New ${name}`}</button>
    )
}