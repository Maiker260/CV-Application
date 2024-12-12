export default function DisplayEditForm({ data, content, buttons, section }) {
    let isHidden = data[section]["hidden"];

    if (isHidden) {
        return ( 
            <section data-section={section}>
                {content}
                {buttons}
            </section>
        )
    }
    return null
}