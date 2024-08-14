import React from "react";

function Contact() {
  return (
    <div className="py-16 w-full flex items-center justify-center">
      <div className="flex items-center justify-center w-1/2">
        <div className="px-2 w-7/12">
          <p className="text-2xl font-bold text-gray-900 md:text-4xl">
            Get in touch
          </p>
          <form
            action="https://getform.io/f/bvrerqeb"
            method="POST"
            className="mt-8 space-y-4"
          >
            <input
              className="h-10 w-5/6 rounded-full border border-black bg-white px-5 text-base focus:outline-none"
              type="text"
              id="name"
              placeholder="Name"
              required
            />
            <input
              className="h-10 w-5/6 rounded-full border border-black bg-white px-5 text-base focus:outline-none"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              className="h-10 w-5/6 rounded-full border border-black bg-white px-5 text-base focus:outline-none"
              type="number"
              id="phone"
              placeholder="Phone No."
              required
            />
            <textarea
              className="pt-2.5 h-10 w-5/6 rounded-full border border-black bg-white px-5 text-base focus:outline-none"
              type="textbox"
              id="message"
              placeholder="Message Me..."
            ></textarea>
            <input
              type="submit"
              className="h-10 w-5/6 rounded-full border border-black bg-black px-3 py-2 text-base font-semibold text-white shadow-lg hover:bg-black/80"
              value="Send Message"
            />
          </form>
        </div>
      </div>
      <div className="w-1/2 pr-24">
        <img
          alt="Contact us"
          className="rounded-3xl object-cover block"
          src="/assets/contact.jpeg"
        />
      </div>
    </div>
  );
}

export default Contact;
