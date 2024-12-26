export default function addNewInfo(data, section) {
    const infoPosition = data[section].content;

    class Info {
        constructor(institution, title, startDate, endDate, description) {
            this.index = infoPosition.length;
            this.institution = institution || "";
            this.title = title || "";
            this.startDate = startDate || "";
            this.endDate = endDate || "";
            this.description = description || "";
            this.hidden = false;
        }
    }

    return new Info("", "", "", "", "");
}