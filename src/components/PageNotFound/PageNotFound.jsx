import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="mt-20 py-10">
      <div className="text-center">
        <p className="text-6xl font-bold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&#x27;t find the page you&#x27;re looking for.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-3">
          <button
            type="button"
            className="flex flex-wrap items-center rounded-md border border-black px-5 py-3 text-sm font-semibold text-black shadow-sm"
          >
            <Link to="/">Go back</Link>
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
          >
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
