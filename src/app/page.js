import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Specials from '@/components/Specials';
import Testimonials from '@/components/Testimonials'
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Little Lemon</title>
        <meta name="description" content="Welcome to Little Lemon Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}
