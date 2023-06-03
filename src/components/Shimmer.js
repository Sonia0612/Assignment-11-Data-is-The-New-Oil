import { restDataList } from "../utils/data";

const Shimmercard = () => {
  return (
    <div className="h-100 w-60 shadow-lg m-5 p-2 bg-white-100">
      <img className="h-40" />
      <div className="h-55 p-2">
            <h2 className="title"></h2>
            <h3 className="cuisines"></h3>
            </div>
            <div className="block">
            <h4 className="rating"> </h4>
            <h5 className="price"></h5>
            <h6 className='time'></h6>
    </div>
    </div>
  );
};
export default function Shimmer() {
  return (
    <div className="body">
      <div className="shadow-lg m-3 p-3 flex justify-between bg-pink-100">
        {/* Search bar */}
        <div className="search-box1">
          <input placeholder="" className="text-lg p-1 m-1 text-center"
/>

          <button className="m-1 hover:text-xl"
>
            <i className="fa fa-search"></i>
          </button>
        </div>

        
      </div>

      <div className="bg-pink-50 shadow-inner m-4">
        <h1>Looking for Great Food For you...</h1>

        <div className="flex flex-wrap">
          {restDataList.map((data, index) => (
            <Shimmercard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
