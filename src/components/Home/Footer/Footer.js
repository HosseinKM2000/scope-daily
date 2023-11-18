import Categories from "./Categories/Categories";
import Footnote from "./Footnote/Footnote";
import Middle from "./Middle/Middle";

function Footer() {
    return (
        <footer className="w-full bg-blackMore px-10">
            <Categories/>
            <Middle/>
            <Footnote/>
        </footer>
    );
}

export default Footer;