export default function Dish({imageUrl, dishName, description }) {

    return (
        <div className="bg-white shadow-lg rounded-lg flex flex-col h-full p-4">
        <img src={imageUrl} alt="Special" className="rounded-lg mb-6"/>
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 text-black">{dishName}</h3>
          <p className="text-gray-700 mb-8">
                {description}
          </p>
        </div>
        <button className="text-xl font-semibold bg-[#495E57] text-[#f4CE14] py-3 px-4 rounded-full mt-auto">Order Now</button>
      </div>
    );
  }
  