import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-black bg-opacity-50">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-8">
        <Link href="/" className="font-bold text-xl text-white">
         Logo
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-xl text-white font-semibold hover:text-yellow-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/reservations">Reservations</Link>
          <Link href="/order-online">Order Online</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
