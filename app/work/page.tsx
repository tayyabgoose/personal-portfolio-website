import ArrowIcon from "app/components/arrowicon";

export const metadata = {
  title: "Tech Portfolio - Muhammad Tayyab",
  description: "The nerdy side of me.",
};

export default function Page() {
  return (
    <>
      {/* <section>
        <h1>Services</h1>
      </section>
      <section>
        <h1>Projects</h1>
      </section> */}
      <section>
        <article>
          <h1 className="mb-1 text-2xl font-semibold tracking-tighter">
            Product Management Case Study
          </h1>
          <ul className="mt-2 mb-2 font-sm flex flex-col gap-1 text-neutral-800 md:flex-row md:gap-4 dark:text-neutral-100">
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-950 dark:hover:text-neutral-300"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.canva.com/design/DAGaS27hJqw/1N09kpVGEItpD4yt75CqOQ/edit?utm_content=DAGaS27hJqw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">presentation</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-950 dark:hover:text-neutral-300"
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/105meRoxHTY29ngK5SVHy5_F_P4FeHYjs/view?usp=sharing"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">brief</p>
              </a>
            </li>
          </ul>
          <p className="mb-1">
            <b>Description: </b>
            <br /> • Led strategic analysis of a RegTech startup's AML
            compliance solutions, evaluating product challenges and
            infrastructure decisions.
            <br /> • Demonstrated product management expertise in regulated
            industries, balancing compliance requirements with innovation and
            market demands.
          </p>
        </article>
        <article>
          <h1 className="mb-1 mt-8 text-2xl font-semibold tracking-tighter">
            Weather App
          </h1>
          <ul className="mt-2 mb-2 font-sm flex flex-col gap-1 text-neutral-800 md:flex-row md:gap-4 dark:text-neutral-100">
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
          <p className="mb-1">
            <b>Domain:</b> Web Development
          </p>
          <p className="mb-1">
            <b>Technologies Used:</b> React, TypeScript, Tailwind CSS,
            OpenWeatherMap API
          </p>
          <p className="mb-1">
            <b>Description:</b> A responsive Web App that fetches the weather
            for the next 4 days.
          </p>
        </article>
        <article>
          <h1 className="mb-1 mt-8 text-2xl font-semibold tracking-tighter">
            MarketMingle
          </h1>
          <ul className="mt-2 mb-2 font-sm flex flex-col gap-1 text-neutral-800 md:flex-row md:gap-4 dark:text-neutral-100">
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-950 dark:hover:text-neutral-300"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.figma.com/proto/xIuxnZ8CGI55VpMpLMi3su/MarketMingle?node-id=12-11&t=B7XRnNsMzEKGRQyK-1"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">prototype</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-950 dark:hover:text-neutral-300"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.figma.com/design/xIuxnZ8CGI55VpMpLMi3su/MarketMingle?node-id=12-11&t=B7XRnNsMzEKGRQyK-1"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">design</p>
              </a>
            </li>
          </ul>
          <p className="mb-1">
            <b>Domain:</b> Web Design
          </p>
          <p className="mb-1">
            <b>Technologies Used:</b> Figma
          </p>
          <p className="mb-1">
            <b>Description:</b> Redesigned an ecommerce site to help increase
            conversions and boost user retention. The site follows best industry
            practices for user accessibility and ease of use.
          </p>
        </article>
      </section>
    </>
  );
}
