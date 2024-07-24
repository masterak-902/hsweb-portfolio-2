import ContactForm from "../islands/ContactForm.tsx";

export default function Home() {
  return (
    <section>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Welcome to our contact page.</h1>
          <p class="my-4">
          If you have any requests, please mention them in the form below.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
