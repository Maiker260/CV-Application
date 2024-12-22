import EditForm from "./EditForm"
import DataList from "./DataList"

import "../../../styles/edit-section/Lists/ListContainer.css"

export default function ListContainer({ data, section, name, onClick, onChange, editMode, dataSelected, editButtons }) {

    const content = editMode
        ? <EditForm 
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