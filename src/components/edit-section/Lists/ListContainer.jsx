import EditForm from "./EditForm"
import DataList from "./DataList"

import "../../../styles/edit-section/Lists/ListContainer.css"

export default function ListContainer({ data, section, name, onClick, onChange, editMode, dataSelected }) {

    const content = editMode
        ? <EditForm 
            section={section}
            data={dataSelected}
            onChange={onChange}
          />

        : <DataList 
            data={data}
            section={section}
            name={name}
            onClick={onClick}
          />

    return (
        <section className="list-container flex-column">
            {content}
        </section>
    )
}