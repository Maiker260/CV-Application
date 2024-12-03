import NavbarBtns from "./components/edit-section/NavbarBtns"
import PersonalDetails from "./components/edit-section/PersonalDetails"

export default function App() {
  
    return (
        <div className="main-cointainer">
            <section className="edit-section">
                <nav className="nav-bar">
                    <NavbarBtns />
                </nav>
                <section className="form-section">
                    <PersonalDetails />
                </section>
            </section>
            <section className="preview-section"></section>
        </div>
    )
}
