import Image from "next/image";

function Categories() {
    const categoriesItems = [
        {title:"Main",subsets:["Home","About","Contacts","References","Supports"]},
        {title:"Tools & Features",subsets:["Guides","Topics","My News","RSS Feeds","Video Center","Podcasts","Watch list"]},
        {title:"Ads",subsets:["Advertise","Commercial Real Estate Ads","Sell Your Business","Recruitment & Career Ads","Coupons","Digital Self Service"]}
    ]
    return (
        <div className="flex items-start gap-8 py-5">
            {
                categoriesItems.map((item,i) => (
                    <div key={i}>
                        <strong className="text-redPublic">{item.title}</strong>
                        <ul className="text-white text-xs flex flex-col gap-5 mt-3">
                            {
                                item.subsets.map((sub,index) => (
                                    <li key={index}>{sub}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
               <Image src="/image/continentsBackground.png" width={400} height={300} className="m-auto " alt="continents"/>
        </div>
    );
}

export default Categories;