import DownSide from "./DownSide/DownSide";
import Logo from "./Logo/Logo";
import UpSide from "./UpSide/UpSide";

function Header() {
    return (
        <header>
            <UpSide/>
            <Logo/>
            <DownSide/>
        </header>
    );
}

export default Header;