export default function HeroSection() {
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
        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>

      <div className="container relative mx-auto" style={{ zIndex: 2 }}>
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              {/* <img src="/img/logo.svg" alt="logo" className="mx-auto mb-6 w-80" />  */}
              <h1 className="text-white font-semibold text-5xl">
                Little Lemon
              </h1>
              {/* Star ratings and other hero content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
