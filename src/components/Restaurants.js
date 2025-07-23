export default function Restaurants({ value }) {
    return (
      <a href={value.cta.link}>
        <div className="w-80 flex-none rounded-2xl border border-gray-300 shadow-md overflow-hidden bg-white">
  {/* Image with overlay */}
  <div className="relative">
    <img
      className="w-full h-[188px] object-cover rounded-t-2xl"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.info?.mediaFiles[0]?.url}
      alt={value?.info?.name}
    />
    <div className="absolute bottom-1 left-2 right-2 flex justify-between text-white text-base font-bold  px-2 py-1 rounded">
      <h3 className="truncate max-w-[70%] z-10 ">{value?.info?.name}</h3>
      <h3 className="z-20">★{value?.info?.rating?.value}</h3>
    </div>
  </div>

  {/* Below content */}
  <div className="px-3 py-2 text-sm">
    <div className="flex justify-between text-gray-600 font-serif">
      <h4 className="truncate max-w-[65%]">{value?.info?.cuisines?.join(", ")}</h4>
      <h4>{value?.info?.costForTwo}</h4>
    </div>

    <div className="flex justify-between text-gray-500 mt-1">
      <h4 className="truncate max-w-[70%]">{value?.info?.locationInfo?.formattedAddress}</h4>
      <h4>{value?.info?.locationInfo?.distanceString}</h4>
    </div>

    {value?.info?.offerInfoV2?.otherOffers?.offers[0]?.header && (
      <button className="bg-green-600 w-full mt-3 text-white text-sm p-2 rounded truncate">
        {value.info.offerInfoV2.otherOffers.offers[0].header}
      </button>
    )}

    {value?.info?.vendorOffer?.infos[0]?.description && (
      <h4 className="bg-green-100 mt-2 text-green-800 rounded-xl px-3 py-1 text-sm truncate">
        {value.info.vendorOffer.infos[0].description}
      </h4>
    )}
  </div>
</div>
</a>

    );
}
