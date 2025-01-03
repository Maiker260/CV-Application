export default function infoUpdate(e, data, setData, infoSelected, setInfoSelected) {
    const { section, info } = e.target.dataset;
    const value = e.target.value;
    
    const index = section === "personalDetails"
            ? data.personalDetails.content[0].index
            : infoSelected[section].index

    const updatedContent = data[section].content.map(entry => 
        entry.index === index
            ? { ...entry, [info]: value }
            : entry
    );
    
    const updatedData = { 
        ...data,
        [section]: {
            ...data[section],
            content: updatedContent
        }
    };

    setData(updatedData);

    if (section !== "personalDetails") {
        setInfoSelected(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [info]: value
            }
        }));
    }
}