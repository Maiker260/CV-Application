import EditFormList from "./EditFormList"
import DataList from "./DataList"

import "../../../styles/edit-section/Lists/ListContainer.css"

export default function ListContainer({ data, section, name, onClick, onChange, editMode, dataSelected, editButtons }) {

    const content = editMode
        ? <EditFormList 
            section={section}
            dataSelected={dataSelected}
            onChange={onChange}
            editButtons={editButtons}
          />

        : <DataList 
            data={data}
            section={section}
            name={name}
            onClick={onClick}
            addData={onClick}
          />

    return (
        <section className="list-container flex-column">
            {content}
        </section>
    )
}