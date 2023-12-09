export default function Footer() {
    return (
      <footer className="bg-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">© 2023 Little Lemon. All rights reserved.</p>
          <div className="flex mt-4 md:m-0">
            {/* Social links can go here or additional navigation */}
            <a href="#" className="text-gray-500 hover:text-gray-900 mx-2">Privacy Policy</a>
            {/* ... other footer links */}
          </div>
        </div>
      </footer>
    );
  }
  