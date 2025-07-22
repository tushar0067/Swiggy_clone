export default function Shimmer() {
  return (
    <div className="w-[80%]  mx-auto flex flex-wrap gap-4  mt-20">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="w-60 flex flex-col justify-center gap-2 mt-10 mb-10 px-1 animate-pulse"
        >
          <div className="bg-gray-200 w-full h-36 rounded-lg" />
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-3/4 h-4 bg-gray-200 rounded" />
          <div className="w-1/2 h-4 bg-gray-200 rounded" />
          <div className="w-2/3 h-4 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}