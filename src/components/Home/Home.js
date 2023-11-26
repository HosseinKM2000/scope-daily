import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainCategorySlice from "./MainCategorySlice/MainCategorySlice";
import MoreCategorySlice from "./OtherDepartments/OtherDepartments";

function HomeComponent() {
    return (
        <div>
            <Header/>
            <div className="mx-16">
                <MainCategorySlice/>
                <MoreCategorySlice/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomeComponent;