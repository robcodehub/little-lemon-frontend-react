export default function NavBar() {
    return (
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-white">Logo</div>
          <div className="space-x-4">
            {/* Add NavLink components or anchor tags here */}
            <a href="#" className="text-white hover:text-yellow-300">Home</a>
            <a href="#" className="text-white hover:text-yellow-300">About</a>
            {/* ... other nav links */}
          </div>
        </div>
      </nav>
    );
  }
  