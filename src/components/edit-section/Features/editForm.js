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

    if (button === 'editButton') {
        selectedData = data[section].content[index]
        startEditMode();

    } else if (button === 'showButton') {
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
        
    } else if (button === 'addButton') {
        selectedData = addNewInfo(data, section)
        startEditMode();
    }
}