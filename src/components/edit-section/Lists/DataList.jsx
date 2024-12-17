import ListElement from "./ListElement"
import AddButton from "./AddButton"

export default function DataList({ data, section, name, onClick }) {
    return (
        <>
            <section>
                {data[section].content.map(info => (
                    <ListElement 
                        key={`${info.institution} - ${info.title}`}
                        name={info.institution}
                        section={section}
                        index={info.index}
                        onClick={onClick}
                    />
                ))}
            </section>
            <section className="button-container flex">
                <AddButton 
                    name={name}
                />
            </section>
        </>
    )
}