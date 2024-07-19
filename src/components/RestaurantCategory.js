import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
    // console.log(data)

    const handleClick = () =>{
        setShowIndex();
    }


    return (<div>
        {/* Header*/}
        <div>
            <div className="w-9/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.category}</span>
            <span>⬇️</span>
            {/* <span>{data.price}</span> */}
            </div>
            {showItems && <ItemList items={data}/>}
            </div>
        </div>
        {/* Body*/}
    </div>
    );
}

export default RestaurantCategory;

