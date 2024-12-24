export default function formVisibility(e, data, setData) {
    const section = e.target.dataset.section;
    const updatedData = {
        ...data, [section]: { ...data[section], hidden: !data[section].hidden }
    };

    setData(updatedData);
}