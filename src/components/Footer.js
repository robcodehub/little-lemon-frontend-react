import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-yellow-300 py-6 ">
      <div className="flex mx-auto gap-4 justify-around container">
        
        {/* Image Column */}
        <div className="flex justify-start items-start">
          <img src="/img/littlelemonrestaurant.jpg" alt="Restaurant" className="rounded-3xl w-[300px] h-[300px]" />
        </div>
        
        {/* Navigation Column */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-2 text-gray-800">Navigation</h4>
          <Link href="/" className="text-gray-800 hover:text-yellow-600">Home</Link>
          <a href="#about" className="text-gray-800 hover:text-yellow-600">About</a>
          <a href="#menu" className="text-gray-800 hover:text-yellow-600">Menu</a>
          <Link href="/reservations" className="text-gray-800 hover:text-yellow-600">Reservations</Link>
          <Link href="/order-online" className="text-gray-800 hover:text-yellow-600">Order Online</Link>
          <Link href="/login" className="text-gray-800 hover:text-yellow-600">Login</Link>
        </div>
        
        {/* Contact Column */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-2 text-gray-800">Contact</h4>
          <p className="text-gray-700">Address: Chicago</p>
          <p className="text-gray-700">Phone Number: 111-111-111</p>
          <p className="text-gray-700">Email: bookings@littlelemon.com</p>
        </div>
        
        {/* Social Media Column */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-2 text-gray-800">Social Media</h4>
          <a href="https://facebook.com" className="text-gray-800 hover:text-yellow-600">Facebook</a>
          <a href="https://twitter.com" className="text-gray-800 hover:text-yellow-600">Twitter</a>
          <a href="https://instagram.com" className="text-gray-800 hover:text-yellow-600">Instagram</a>
        </div>

      </div>
      <div className="text-center mt-8">
        <p className="text-gray-800 text-sm">© 2023 Little Lemon. All rights reserved.</p>
        <Link href="/" className="text-gray-800 hover:text-yellow-600">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
