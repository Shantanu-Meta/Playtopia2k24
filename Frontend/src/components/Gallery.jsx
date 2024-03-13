import Marquee from 'react-fast-marquee';

const Gallery = () => {
  return (
    <div className="min-h-screen p-4 md:p-20 flex justify-center items-center flex-col">
      <Marquee className='mt-2'>
        <div className="flex justify-between flex-wrap h-[200px]">
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="first image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="second image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="third image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="fourth image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="fifth image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="sixth image" className="w-full" />
          </div>

          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="seventh image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="eighth image" className="w-full" />
          </div>
        </div>
      </Marquee>
      <Marquee direction="right" className='mt-2'>
        <div className="flex justify-between flex-wrap">
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="first image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="second image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="third image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="fourth image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="fifth image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="sixth image" className="w-full" />
          </div>
          {/* Add extra images to fill up space */}
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="seventh image" className="w-full" />
          </div>
          <div className="w-52 mb-4 md:mb-0">
            <img src="/bgmi.jpg" alt="eighth image" className="w-full" />
          </div>
          {/* Add more images as needed */}
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;
