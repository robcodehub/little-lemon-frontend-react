import Head from 'next/head';
import NavBar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection';
import Specials from '@/components/Specials';
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Little Lemon</title>
        <meta name="description" content="Welcome to Little Lemon Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroSection />
      <Specials />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}


export function PageLayout({children}) {
  return (
    <div>
      <Head>
        <title>Little Lemon</title>
        <meta name="description" content="Welcome to Little Lemon Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
