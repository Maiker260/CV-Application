export default function closeEditMode(setEditMode, section) {
    setEditMode(prevState => ({
        ...prevState,
        [section]: false,
    }));
}