import BookingForm from "./BookingForm";

export default function BookingPage() {
    return (
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
           style={{
             minHeight: '75vh',
             backgroundImage: `url('/img/herobanner.jpg')`, // Note the change here
             backgroundSize: 'cover',
             backgroundPosition: 'center center',
           }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
             style={{
               backgroundImage: `url('/img/herobanner.jpg')`, // And here
             }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-20 bg-black"></span>
        </div>
  
        <div className="container relative mx-auto" style={{ zIndex: 2 }}>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  