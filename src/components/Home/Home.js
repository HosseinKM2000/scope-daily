import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainCategorySlice from "./MainCategorySlice/MainCategorySlice";

function HomeComponent() {
    return (
        <div>
            <Header/>
            <div className="mx-16">
                <MainCategorySlice/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomeComponent;