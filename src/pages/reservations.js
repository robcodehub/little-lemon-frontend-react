import HeroSection from '@/components/HeroSection';
import Specials from '@/components/Specials';
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs';
import BookingPage from '@/components/booking/BookingPage';

import {PageLayout} from '@/app/page';

export default function Reservations() {
  return (
    <PageLayout>
      <HeroSection />
      <BookingPage />
    </PageLayout>
  );
}
