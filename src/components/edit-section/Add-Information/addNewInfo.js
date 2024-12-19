import { exampleData } from "../../exampleData"

export default function addNewInfo(section) {
    const infoPosition = exampleData[section].content;

    class Info {
        constructor(institution, title, startDate, endDate, description) {
            this.index = infoPosition.length,
            this.institution = institution,
            this.title = title,
            this.startDate = startDate,
            this.endDate = endDate,
            this.description = description
        }
    }

    const newInfo = new Info(
            "", "", "", "", ""
        )

    infoPosition.push(newInfo)

    return infoPosition[infoPosition.length - 1]
}