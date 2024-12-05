import NavbarBtn from "./components/navbar/NavbarBtn"
import PersonalDetails from "./components/edit-section/PersonalDetails"
import Education from "./components/edit-section/Education"
import Experience from "./components/edit-section/Experience"
import CvPreview from "./components/preview-section/CvPreview"

import "./styles/App.css";

export default function App() {
    return (
        <div className="main-container">
            <nav className="navbar-section flex-column">
                <NavbarBtn 
                    title="Content" 
                    icon={"M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"} 
                />
                <NavbarBtn 
                    title="Customize"
                    icon={"M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"}
                />
            </nav>
            <section className="edit-section flex-column">
                <PersonalDetails />
                <Education />
                <Experience />
            </section>
            <section className="preview-section">
                <CvPreview />
            </section>
        </div>
    )
}