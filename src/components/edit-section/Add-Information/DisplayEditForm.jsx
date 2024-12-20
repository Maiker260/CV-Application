export default function DisplayEditForm({ data, content, section, buttons }) {
    let isHidden = data[section]["hidden"];

    if (!isHidden) {
        return ( 
            <section data-section={section}>
                {content}
                {buttons}
            </section>
        )
    }
    return null
}