import Search from "./Search/Search";
import Share from "./Share/Share";

function Start() {
    return (
        <div className="flex items-center gap-1">
            <Search/>
            <Share/>
        </div>
    );
}

export default Start;