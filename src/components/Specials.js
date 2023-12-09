export default function Specials() {
    return (
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Specials</h2>
        {/* Placeholder for specials cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Repeat this for each special */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img src="/path-to-your-placeholder-image.jpg" alt="Special" className="rounded-lg mb-4"/>
            <h3 className="text-xl font-bold mb-2">Special Item Name</h3>
            <p className="text-gray-700 mb-4">Special Item Description</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-full">Order Now</button>
          </div>
        </div>
      </div>
    );
  }
  