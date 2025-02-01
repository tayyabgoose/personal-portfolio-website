import { BlogPosts } from "app/components/posts";
import ArrowIcon from "./components/arrowicon";

export default function Page() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Muhammad Tayyab
        </h1>
        <p className="mb-4">
          &gt; Currently pursuing <b>Frontend Development</b> and <b>Design</b>.
        </p>
        <p className="mb-4">
          Have dabbled with{" "}
          <a
            href="https://tayyab.dev/unsplash"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-medium"
          >
            photography
          </a>{" "}
          and{" "}
          <a
            href="https://tayyab.dev/instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-medium"
          >
            pixel art
          </a>{" "}
          in the past.
        </p>
        <p className="mb-4">
          Hobbies include{" "}
          <a
            href="https://www.strava.com/athletes/130308027"
            target="_blank"
            rel="noopener noreferrer"
          >
            running 🏃
          </a>{" "}
          (from my problems), opening a dozen{" "}
          <a href="https://arc.net" target="_blank" rel="noopener noreferrer">
            browser
          </a>{" "}
          tabs, and obsessing over minor details.
        </p>
        <section className="flex gap-2.5">
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <div className="p-2 bg-gray-800 text-white hover:text-neutral-200 rounded-md text-sm">
              React
            </div>
          </a>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200"
          >
            <div className="p-2 bg-gray-800 text-white hover:text-neutral-200 rounded-md text-sm">
              Next.js
            </div>
          </a>
          <a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200"
          >
            <div className="p-2 bg-gray-800 text-white hover:text-neutral-200 rounded-md text-sm">
              Figma
            </div>
          </a>
          <a
            href="https://framer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200"
          >
            <div className="p-2 bg-gray-800 text-white hover:text-neutral-200 rounded-md text-sm">
              Framer
            </div>
          </a>
        </section>
        {/* <div className="my-8"><BlogPosts /></div> */}
      </section>
    </>
  );
}
