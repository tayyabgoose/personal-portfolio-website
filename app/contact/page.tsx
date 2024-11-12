export const metadata = {
  title: "Contact - Muhammad Tayyab",
  description: "Get in touch with Muhammad Tayyab.",
};

export default function Page() {
  return (
    <section className="contact-page">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Contact Me
      </h1>
      <p>
        email -{" "}
        <a
          href="mailto:tayyab.t450@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tayyab.t450@gmail.com
        </a>
      </p>
      <p>book a call - <a href="https://cal.com/tayyab" target="_blank" rel="noopener noreferrer">here!</a></p>
    </section>
  );
}
