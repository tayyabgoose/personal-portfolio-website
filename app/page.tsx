import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Muhammad Tayyab
      </h1>
      <p className="mb-4">
        {`I'm a Computer Science student at FAST-NUCES Lahore. My interests lie in Frontend Development and UI/UX Design.`}
      </p>
      <p className="mb-4">{`Besides the nerd in me, I really enjoy taking photos in my free time.`}</p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
