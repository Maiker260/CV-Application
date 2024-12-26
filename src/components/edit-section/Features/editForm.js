import addNewInfo from "../Add-Information/addNewInfo";

export default function editForm(e, data, setData, setInfoSelected, setEditMode, setOldData) {
    const { section, index, button } = e.target.dataset;

    let selectedData;

    function startEditMode(newData) {
        setInfoSelected(prevState => ({
            ...prevState,
            [section]: newData || selectedData,
        }));

        setEditMode(prevState => ({
            ...prevState,
            [section]: true,
        }));
    }

    if (button === 'editButton') {
        selectedData = data[section].content[index];
        startEditMode();

    } else if (button === 'showButton') {
        setData(prevState => {
            const updatedContent = prevState[section].content.map(info =>
                info.index === Number(index)
                    ? { ...info, hidden: !info.hidden }
                    : info
            );

            return {
                ...prevState,
                [section]: {
                    ...prevState[section],
                    content: updatedContent,
                },
            };
        });
        setOldData(data)

    } else if (button === 'addButton') {
        
        const newData = addNewInfo(data, section);
        setData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                content: [...prevState[section].content, newData],
            },
        }));
        startEditMode(newData);
    }
}