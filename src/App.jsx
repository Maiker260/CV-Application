import { useState } from "react"
import NavbarBtn from "./components/navbar/NavbarBtn"
import AddPersonalDetails from "./components/edit-section/Add-Information/AddPersonalDetails"
import CvPreview from "./components/preview-section/CvPreview"
import EditInfoContainer from "./components/edit-section/EditInfoContainer"
import { exampleData } from "./components/exampleData"
import EditButton from "./components/edit-section/EditButton"
import DisplayEditForm from "./components/edit-section/Add-Information/DisplayEditForm";
import ListContainer from "./components/edit-section/Lists/ListContainer"
import infoUpdate from "./components/edit-section/Features/infoUpdate"
import formVisibility from "./components/edit-section/Features/formVisibility"
import editForm from "./components/edit-section/Features/editForm"
import clearForm from "./components/edit-section/Features/clearForm"
import formButtons from "./components/edit-section/Features/formButtons"

import "./styles/App.css";

export default function App() {

    const [data, setData] = useState(exampleData)
    const [oldData, setOldData] = useState(exampleData)
    const [infoSelected, setInfoSelected] = useState({ education: "", experience: "", moreInfo: "" })
    const [editMode, setEditMode] = useState({ education: false, experience: false, moreInfo: false })

    const handlers = {
        handleInfoUpdate: (e) => infoUpdate(e, data, setData, infoSelected, setInfoSelected),
        handleFormVisibility: (e) => formVisibility(e, data, setData, setOldData),
        handleEditForm: (e) => editForm(e, data, setData, setInfoSelected, setEditMode, setOldData),
        handleClearForm: () => clearForm(data, setData),
        handleFormButtons: (e) => formButtons(e, data, setData, oldData, setOldData, setEditMode),
    }

    return (
        <div className="main-container">
            <nav className="navbar-section flex-column">
                <NavbarBtn 
                    title="Content" 
                    icon={"M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"} 
                />
                <NavbarBtn 
                    title="Customize - In Progress"
                    icon={"M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"}
                />
            </nav>
            <section className="edit-section flex-column">
                <EditInfoContainer 
                    title="Personal Details"
                    section="personalDetails"
                    icon="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
                    onClick={handlers.handleFormVisibility}
                    content={
                        <DisplayEditForm 
                            data={data}
                            section="personalDetails"
                            content=
                                {
                                    <AddPersonalDetails 
                                        data={data} 
                                        onChange={handlers.handleInfoUpdate} 
                                    />
                                }
                            buttons=
                                {
                                    <EditButton 
                                        name="Clear" 
                                        onClick={handlers.handleClearForm}    
                                    />
                                }
                        />
                    }
                />
                <EditInfoContainer 
                    title="Education"
                    section={"education"}
                    icon="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"
                    onClick={handlers.handleFormVisibility}
                    content={
                        <DisplayEditForm 
                            data={data}
                            section="education"
                            content={
                                <ListContainer
                                    data={data}
                                    section="education"
                                    name={"Education"}
                                    onClick={handlers.handleEditForm}
                                    onChange={handlers.handleInfoUpdate}
                                    editMode={editMode.education}
                                    dataSelected={infoSelected.education}
                                    editButtons={handlers.handleFormButtons}
                                />
                            }
                        />
                    }
                />
                <EditInfoContainer 
                    title="Experience"
                    section={"experience"}
                    icon="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"
                    onClick={handlers.handleFormVisibility}
                    content={
                        <DisplayEditForm 
                            data={data}
                            section="experience"
                            content={
                                <ListContainer
                                    data={data}
                                    section="experience"
                                    name={"Experience"}
                                    onClick={handlers.handleEditForm}
                                    onChange={handlers.handleInfoUpdate}
                                    editMode={editMode.experience}
                                    dataSelected={infoSelected.experience}
                                    editButtons={handlers.handleFormButtons}
                                />
                            }
                        />
                    }
                    
                />
                <EditInfoContainer 
                    title="More Information"
                    section={"moreInfo"}
                    icon="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"
                    onClick={handlers.handleFormVisibility}
                    content={
                        <DisplayEditForm 
                            data={data}
                            section="moreInfo"
                            content={
                                <ListContainer
                                    data={data}
                                    section="moreInfo"
                                    name={"Information"}
                                    onClick={handlers.handleEditForm}
                                    onChange={handlers.handleInfoUpdate}
                                    editMode={editMode.moreInfo}
                                    dataSelected={infoSelected.moreInfo}
                                    editButtons={handlers.handleFormButtons}
                                />
                            }
                        />
                    }
                    
                />
            </section>
            <section className="preview-section">
                <CvPreview data={data} />
            </section>
        </div>
    )
}