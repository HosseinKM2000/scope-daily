import Center from "./Center/Center";
import End from "./End/End";
import Start from "./Start/Start";

function DownSide() {
    return (
        <div className="flex items-center justify-between border-gray-300 border-y-[1px] py-3 px-2 mx-16">
            <Start/>
            <Center/>
            <End/>
        </div>
    );
}

export default DownSide;