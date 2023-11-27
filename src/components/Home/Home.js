import EconomicNewsSlider from "./EconomicNewsSlider/EconomicNewsSlider";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainCategorySlice from "./MainCategorySlice/MainCategorySlice";
import MoreCategorySlice from "./OtherDepartments/OtherDepartments";
import OurDuty from "./OurDuty/OurDuty";

function HomeComponent() {
    return (
        <div>
            <Header/>
            <div className="mx-16">
                <MainCategorySlice/>
                <MoreCategorySlice/>
                <EconomicNewsSlider/>
                <OurDuty/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomeComponent;