
function OtherDepartments() {
    const Items = [
        {title:"LifeStyle",desc:"Track information about your lifestyle",image:"/image/OtherDepartments/Luxury Leather iPhone Cases and Tech Accessories.jpg"},
        {title:"Health",desc:"Methods and ways of health and healthy living",image:"/image/OtherDepartments/No-Mercy Shoulder-Pump Workout.jpg"},
        {title:"Cooking",desc:"Getting to know the food varieties of the world",image:"/image/OtherDepartments/Grilled Chicken Salad + Homemade Sweet Onion Dressing = WINNER!.jpg"},
        {title:"Art & Design",desc:"A complete and detailed look at the artworks of the world",image:"/image/OtherDepartments/download.jpg"},
    ]
    return (
        <div className="flex flex-col gap-5 my-3">
            <h1 className="font-bold text-xl">Other Departments:</h1>
            <section className="flex items-center justify-between flex-wrap">
                {
                    Items.map((item,i) => (
                        <div key={i} className="flex items-start gap-3 w-[15rem]">
                            <div className="w-[10rem] h-[5rem] relative overflow-hidden otherDepartments">
                                <div className="otherDepartmentsAfter absolute h-full w-full  z-20"></div>
                                <img className="otherDepartmentsImage rounded-md h-full w-full transition-all" src={item.image} alt={item.title}/>
                            </div>
                            <div className="flex flex-col gap-1 items-start">
                                <span className="text-sm font-bold">{item.title}</span>
                                <p className="text-xs">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default OtherDepartments;