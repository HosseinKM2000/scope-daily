import LeftSide from "./LeftSide.js/LeftSide";
import RightSide from "./RightSide/RightSide";

function Popular() {
    return (
        <div className="flex w-full items-start gap-3 h-[25rem] my-10 overflow-hidden">
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default Popular;