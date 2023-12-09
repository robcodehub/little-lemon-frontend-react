export default function Footer() {
    return (
      <footer className="bg-primary-light py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-dark text-sm text-center md:text-left">© 2023 Little Lemon. All rights reserved.</p>
          <div className="flex mt-4 md:m-0">
            {/* Social links can go here or additional navigation */}
            <a href="#" className="text-primary-dark hover:text-secondary-blush mx-2">Privacy Policy</a>
            {/* ... other footer links */}
          </div>
        </div>
      </footer>
    );
  }
  