import Link from "next/link";
import CollectorsItem from "./CollectorsItem/CollectorsItem";

function Center() {
    const menuItems = [
        {title:"World",subsets:["Asia","Europe","American","Africa","Russia","Middle East","U.K.","China"]},
        {title:"Economy",subsets:["Central Banking","Housing","Jobs","Trade","Bourse"]},
        {title:"style",subsets:["Beauty","Design","Fashion"]},
        {title:"Sports",subsets:["Baseball","Basketball","Football","Golf","Hockey","Olympics","Soccer","Tennis"]},
        {title:"Latest"},
    ];

    return (
        <menu>
            <ul className="flex items-center font-bold text-slate-700">
                <>
                    <li className="border-dotted border-x-[2.5px] border-slate-400 px-5">
                        <Link href="/" className="hover:text-yellow-600 transition-all duration-300">Home</Link>
                    </li>
                    {
                        menuItems.map((item,i) => (
                            <>
                             {
                                item.subsets
                                ?
                                <CollectorsItem key={i} item={item}/>
                                :
                                <>
                                    <li key={i} className="cursor-pointer hover:text-yellow-600 transition-all duration-300 border-dotted border-r-[2.5px] px-5 border-slate-400">
                                        <Link href={`/${item.title}`}>{item.title}</Link>
                                    </li>
                                </>
                             }
                            </>
                        ))
                    }
                </>
            </ul>
        </menu>
    );
}

export default Center;