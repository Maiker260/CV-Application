import closeEditMode from "./closeEditMode";
import addToDatabase from "../../addToDatabase";
import { getCvData } from "../../cvData";

export default function formButtons(e, data, setData, setEditMode) {
    const { index, section, btn } = e.target.dataset;

    function deleteFn() {
        setData(prevState => ({
            ...prevState, [section]: {
                ...prevState[section], content: [
                    ...prevState[section].content.filter(
                        info => info.index !== Number(index)
                    ).map((info, idx) => ({
                        ...info, index: idx
                    }))
                ]
            }
        }))
    }

    // switch (btn) {
    //     case 'DeleteBtn':
    //         deleteFn();
    //         closeEditMode(setEditMode, section);
    //         break;

    //     case 'CancelBtn':
    //         // setData(getCvData())
    //         if(!data[section].content[index].institution) {
    //             deleteFn()
    //         }
    //         closeEditMode(setEditMode, section);
    //         break

    //     case 'SaveBtn':
    //         if(!data[section].content[index].institution) {
    //             deleteFn()
    //         }
    //         addToDatabase(data)
    //         closeEditMode(setEditMode, section);
    //         break
    // }

    if (btn === 'DeleteBtn') {
        deleteFn();
        closeEditMode(setEditMode, section);
    } else if (btn === 'CancelBtn') {
        setData(getCvData())
        if(!data[section].content[index].institution) {
            deleteFn()
        }
        closeEditMode(setEditMode, section);
    } else if (btn === 'SaveBtn') {
        if(!data[section].content[index].institution) {
            deleteFn()
        }
        addToDatabase(data)
        closeEditMode(setEditMode, section);
    }
}