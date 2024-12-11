import EditButton from "./EditButton"

import "../../styles/edit-section/EditButtonGroup.css"

export default function EditButtonGroup({ delButtonColor, cancelButtonColor, saveButtonColor, icon }) {
    return (
        <div className="buttons-container flex">
            <EditButton
                bgColor={delButtonColor}
                icon={icon}
                name="Delete"
                flex="flex"
            />
            <div className="right-buttons flex">
                <EditButton 
                    bgColor={cancelButtonColor}
                    name="Cancel"
                />
                <EditButton 
                    bgColor={saveButtonColor}
                    name="Save"
                />
            </div>
        </div>
    )
}