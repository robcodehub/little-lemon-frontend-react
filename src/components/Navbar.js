import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 opacity-80 bg-primary">
      <div className="container mx-auto flex items-center justify-between p-2 md:p-4 z-20 ">
        <Link href="/" className="font-bold text-xl text-primary">
        <img src="/img/logo.svg" alt="logo" className="mx-auto w-44 my-1" /> 
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-xl text-primary-light font-semibold z-20 tracking-wider">
          <Link href="/" className="hover:text-secondary-peach">Home</Link>
          <Link href="/about" className="hover:text-secondary-peach">About</Link>
          <Link href="/menu" className="hover:text-secondary-peach">Menu</Link>
          <Link href="/reservations" className="hover:text-secondary-peach">Reservations</Link>
          <Link href="/order-online" className="hover:text-secondary-peach">Order Online</Link>
          <Link href="/login" className="hover:text-secondary-peach">Login</Link>
        </div>
      </div>
    </nav>
  );
}
