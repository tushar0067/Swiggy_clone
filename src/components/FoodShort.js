
export default function FoodShort({foodData}){
    return (
    <div className=" max-w-[80%] flex-none ">
    <a href={foodData?.action?.link}>
    <img  className="w-38 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} alt="food" />
    </a>
    </div>
    );
}