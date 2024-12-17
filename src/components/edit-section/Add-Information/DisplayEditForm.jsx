export default function DisplayEditForm({ data, content, section }) {
    let isHidden = data[section]["hidden"];

    if (!isHidden) {
        return ( 
            <section data-section={section}>
                {content}
            </section>
        )
    }
    return null
}