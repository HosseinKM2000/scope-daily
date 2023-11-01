import { getDeferentDate } from "src/methods/date/date";

function DateBox() {
    return (
        <div className="flex items-center gap-1 px-5 py-1">
            <span className="text-4xl">{getDeferentDate("DAY_NUM")}</span>
            <div className="text-sm font-bold">
                <p>{getDeferentDate("MONTH_NAME")}</p>
                <p>{getDeferentDate("YEAR_NUM")}</p>
            </div>
        </div>
    );
}

export default DateBox;