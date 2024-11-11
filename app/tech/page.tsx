function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata = {
  title: "Tech Portfolio - Muhammad Tayyab",
  description: "The nerdy side of me.",
};

export default function Page() {
  return (
    <>
      <section>
        <h1 className="mb-1 text-2xl font-semibold tracking-tighter">
          Weather App
        </h1>
        <ul className="mb-1 font-sm flex flex-col space-x-0 space-y-2 text-neutral-800 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-100">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-950 dark:hover:text-neutral-300"
              rel="noopener noreferrer"
              target="_blank"
              href="https://weather-app-tayyab.vercel.app"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">live</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-950 dark:hover:text-neutral-300"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/tayyabgoose/weather-app"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">source</p>
            </a>
          </li>
        </ul>
        <p>Tech Stack: React, Tailwind CSS, OpenWeatherMap API</p>
        <p className="mt-1">
          A responsive Web App that fetches the weather for the next 4 days.
        </p>
      </section>
    </>
  );
}
