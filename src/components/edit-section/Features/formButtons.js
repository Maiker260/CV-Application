import closeEditMode from "./closeEditMode";

export default function formButtons(e, data, setData, oldData, setOldData, setEditMode) {
    const { index, section, btn } = e.target.dataset;
    const institution = data[section].content[index].institution;

    function deleteFn() {
        setData(prevState => {
            const updatedContent = prevState[section].content
                .filter(info => info.index !== Number(index))
                .map((info, idx) => ({ ...info, index: idx }));
        
            return {
                ...prevState,
                [section]: {
                    ...prevState[section],
                    content: updatedContent
                }
            };
        });
    }

    if (btn === 'DeleteBtn') {
        deleteFn();
        closeEditMode(setEditMode, section);

    } else if (btn === 'CancelBtn') {
        if (!institution) {
            setData(prevState => {
                const updatedContent = prevState[section].content
                    .filter(info => info.index !== Number(index));
    
                return {
                    ...prevState,
                    [section]: {
                        ...prevState[section],
                        content: updatedContent,
                    },
                };
            });
        }
        setData(oldData);
        closeEditMode(setEditMode, section);

    } else if (btn === 'SaveBtn') {
        if(!institution) {
            deleteFn()
        }
        setOldData(data)
        closeEditMode(setEditMode, section);
    }
}