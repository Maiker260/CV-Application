import ListElement from "./ListElement"
import AddButton from "./AddButton"

export default function DataList({ data, section, name, onClick, addData }) {

    const infoList = data[section].content
        ? data[section].content.map(info => (
            <ListElement 
                key={`${info.institution} - ${info.title}`}
                name={info.institution}
                data={data}
                section={section}
                index={info.index}
                onClick={onClick}
            />
          ))
        : null

    return (
        <>
            <section>
                {infoList}
            </section>
            <section className="button-container flex">
                <AddButton 
                    name={name}
                    onClick={addData}
                    section={section}
                />
            </section>
        </>
    )
}