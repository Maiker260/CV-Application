import ListElement from "./ListElement"
import AddButton from "./AddButton"

import "../../../styles/edit-section/Lists/ListContainer.css"

export default function ListContainer({ data, name }) {
    return (
        <section className="list-container flex-column">
            <section>
                <ListElement 
                    name={"London University"}
                />
                <ListElement 
                    name={"London University"}
                />
            </section>
            <section className="button-container flex">
                <AddButton 
                    name={name}
                />
            </section>
        </section>
    )
}