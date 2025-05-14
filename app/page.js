import Image from "next/image";


export default function Home() {
  
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-sky-400 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute left-0 bottom-0 h-full w-full text-blue-500 opacity-10"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
          <svg
            className="absolute right-0 top-0 h-full w-full text-white opacity-10"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="100,100 100,0 0,100" />
          </svg>
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our <span className="text-yellow-300">Team</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-8">
              Build your career at a company that values innovation, growth, and
              people. We're creating the future together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#open-positions"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-80 h-80">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400 rounded-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-yellow-300 rounded-lg"></div>
              <div className="relative w-72 h-72 bg-white rounded-lg overflow-hidden">
                <Image
                  src="images/bannerT.png"
                  alt="Team collaboration"
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-blue-100">Employees</div>
            </div>
            <div>
              <div className="text-2xl font-bold">20+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-blue-100">Employee Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">92%</div>
              <div className="text-blue-100">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
