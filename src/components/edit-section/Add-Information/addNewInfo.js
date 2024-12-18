export default function addNewInfo(e) {

    class Info {
        constructor(institution, title, startDate, endDate, description) {
            this.institution = institution,
            this.title = title,
            this.startDate = startDate,
            this.endDate = endDate,
            this.description = description
        }
    }

    return newInfo = new Info(
        "", "", "", "", ""
    )
}