import NavbarBtn from "./components/navbar/NavbarBtn"
import PersonalDetails from "./components/edit-section/PersonalDetails"
import Education from "./components/edit-section/Education"
import Experience from "./components/edit-section/Experience"
import CvPreview from "./components/preview-section/CvPreview"

import "./styles/App.css";

export default function App() {
    return (
        <div className="main-container">
            <nav className="navbar-section">
                <NavbarBtn title="Customize" />
                <NavbarBtn title="Content" />
            </nav>
            <section className="edit-section">
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