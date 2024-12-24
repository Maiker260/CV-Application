import addNewInfo from "../Add-Information/AddNewInfo";
import { setCvData } from "../../cvData";

export default function editForm(e, data, setData, setInfoSelected, setEditMode) {
    const { section, index, button } = e.target.dataset;
    let selectedData;

    // Save old data before modiying it.
    setCvData(data)

    function startEditMode() {
        setInfoSelected(prevState => ({
            ...prevState,
            [section]: selectedData,
        }));
        
        setEditMode(prevState => ({
            ...prevState,
            [section]: true,
        }));
    }

    switch (button) {
        case 'editButton':
            selectedData = data[section].content[index]
            startEditMode();
            break;

        case 'showButton':
            setData(prevState => ({
                ...prevState, [section]: {
                    ...prevState[section], content: [
                        ...prevState[section].content.map(info => 
                            info.index === Number(index) 
                                ? { ...info, hidden: !info.hidden }
                                : info
                        )
                    ]
                }
            }))

        case 'addButton':
            selectedData = addNewInfo(data, section)
            startEditMode();
            break;
    }  
}