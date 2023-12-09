export default function Testimonials() {
    return (
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          {/* Placeholder for testimonials cards */}
          <div className="flex flex-wrap justify-center">
            {/* Repeat this for each testimonial */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-600">"Great experience... Loved the food!"</p>
                {/* Placeholder for user profile image */}
                <div className="flex items-center mt-4">
                  <div className="rounded-full h-12 w-12 overflow-hidden">
                    <img src="/path-to-your-placeholder-image.jpg" alt="Profile"/>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold">John Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  