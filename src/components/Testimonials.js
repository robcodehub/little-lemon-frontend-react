
const testimonials = [
  {
    imageUrl: "/img/customers/woman1.jpg",
    name: "Isabella Johnson",
    headline: "Absolutely loved it!",
    testimonial: "The ambiance and the food were both top-notch. Can't wait to come back!"
  },
  {
    imageUrl: "/img/customers/man1.jpg",
    name: "Oliver Smith",
    headline: "A delightful experience",
    testimonial: "Every bite was a joy, and the service was impeccable. Highly recommended!"
  },
  {
    imageUrl: "/img/customers/woman2.jpg",
    name: "Emma Stone",
    headline: "Best dinner in town",
    testimonial: "Little Lemon has become my go-to spot for dining out. The flavors are incredible."
  },
  {
    imageUrl: "/img/customers/man3.jpg",
    name: "Rohan Kumar",
    headline: "A gastronomic delight",
    testimonial: "From appetizers to desserts, every dish is prepared to perfection. A must-visit!"
  }
];

function TestimonialCard ({ imageUrl, name, headline, testimonial }) {
  return (
    <div className="max-w-md bg-primary-dark rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col items-center p-5">
        <img className="mb-3 w-[10rem] h-[10rem] rounded-full shadow-lg" src={imageUrl} alt="Customer portrait" />
        <h5 className="mb-1 text-xl font-medium text-secondary-peach">{headline}</h5>
        <span className="text-sm text-primary-light">{name}</span>
        <p className="text-secondary-blush mt-4 text-center">{testimonial}</p>
      </div>
    </div>
  );
};

export default function Testimonials () {

  return (
    <div className="mx-auto my-14 px-14 pt-10 pb-16 bg-primary-light">
      <h2 className="text-3xl text-primary-dark font-bold text-center mb-8">Testimonials</h2>
      <div className="flex flex-row justify-center items-center gap-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imageUrl={testimonial.imageUrl}
            name={testimonial.name}
            headline={testimonial.headline}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </div>
  );
};
