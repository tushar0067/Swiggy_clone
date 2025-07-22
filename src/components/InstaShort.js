
export default function InstaShort({value}){
    return (
    <div className=" max-w-[80%] flex-none ">
    <a href={value?.action?.link}>
    <img  className="w-38 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId} alt="instamart" />
    <h2 className="text-center">{value?.action.text}</h2>
    </a>
    </div>
    );
}