export default function AboutUs() {
  return (
    <div id="about" className="container mx-auto px-6 pb-14">
      <div className="flex flex-row justify-between items-center">

        <div className="w-full md:w-1/2 h-full">
          <h2 className="text-3xl font-bold mb-4 text-primary-light">Little Lemon Chicago</h2>
          <p className="text-secondary-blush text-lg">
            Little Lemon is a delightful neighborhood bistro nestled in the heart of the city, offering a sanctuary for those seeking the comfort of home-cooked meals and the spirit of a vibrant community. <br />  <br />
            Our menu showcases a symphony of simple, yet exquisitely prepared dishes that honor the bounty of the region, accompanied by a curated selection of classic cocktails to elevate your dining experience. <br />  <br />
            With an ambiance that buzzes with energy and warmth, Little Lemon is the perfect retreat for casual diners and food enthusiasts alike, eager to indulge in the pleasures of a well-laid table and the timeless ritual of shared meals.
          </p>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-end content-end">
          <div className="w-3/4">
            <img src="/img/atmosphere.jpg" alt="Top Right Image" className="rounded-full" />
          </div>
        </div>

      </div>
    </div>
  );
}
