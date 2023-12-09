export default function Dish({imageUrl, dishName, description}) {
    return (
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={imageUrl} alt="Special" className="rounded-lg mb-4"/>
            <h3 className="text-xl font-bold mb-2 text-black">{dishName}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-full">Order Now</button>
          </div>
    );
  }
  