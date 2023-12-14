import HeroSection from '@/components/HeroSection';
import Specials from '@/components/Specials';
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs';

import {PageLayout} from '@/app/page';

export default function Menu() {
  return (
    <PageLayout>
      <HeroSection />
      <Specials />
      <Testimonials />
      <AboutUs />
    </PageLayout>
  );
}
