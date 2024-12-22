import EditButton from "./EditButton"

import "../../styles/edit-section/EditButtonGroup.css"

export default function EditButtonGroup({ data, section, delButtonColor, cancelButtonColor, saveButtonColor, icon, onClick }) {
    return (
        <div className="buttons-container flex">
            <EditButton
                bgColor={delButtonColor}
                icon={icon}
                name="Delete"
                flex="flex"
                onClick={onClick}
                data={data}
                section={section}
            />
            <div className="right-buttons flex">
                <EditButton 
                    bgColor={cancelButtonColor}
                    name="Cancel"
                    onClick={onClick}
                    data={data}
                    section={section}
                />
                <EditButton 
                    bgColor={saveButtonColor}
                    name="Save"
                    onClick={onClick}
                    data={data}
                    section={section}
                />
            </div>
        </div>
    )
}