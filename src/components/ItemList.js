import { IMG_CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    console.log(items);
    return <div className="text-left selection:p-2 m-2 border border-gray-100 border-b-2 justify-between flex">
                <div className="w-9/12">
                    <div className="py-2">
                    <span >{items.name} </span>
                    <span>{items.price}</span>
                </div>
                <p className="text-xs">{items.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute m-auto min-w-max">Add +</button>
                </div>
                <img className="w-full h-40" src="https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78746.jpg?w=360"/>
            </div>
    </div>
}
export default ItemList;