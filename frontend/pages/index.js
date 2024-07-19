import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <div className='flex flex-col lg:flex-row mx-8 my-12 justify-between'>
        <div className="flex flex-col items-start justify-start">
          <div className='mb-4'>
            <h3 className="font-bold md:text-4xl">(2024)</h3>
            <h1 className="font-semibold transition-all duration-300 sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">FALL<br></br>COLLECTIONS</h1>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <p className="text-left font-semibold text-sm p-1">Explore our captivating collections.</p>
            <p className="text-center font-semibold text-sm p-1">Embracing elegance in unparalleled luxury style.</p>
          </div>

        </div>
        <div className="">
          <Image
            src="/dress1.jpg"
            alt="Dress 1"
            width={700}
            height={800}
            className="object-cover"
          />
        </div>
      </div>

    </main>
  );
};

export default Home;
