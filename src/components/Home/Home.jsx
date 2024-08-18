import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="relative w-full">
      <div class="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div class="relative mx-auto max-w-2xl py-24">
          <div class="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              ></path>
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi, Developers
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              I'm an Entry-level Programmer from New Delhi, India with
              specialization in Java Full Stack (server-side framework Spring
              Boot, client-side framework React and MySQL database management ).
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-2">
              <Link
                to="/project"
                class="rounded-full bg-black px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
              >
                My Projects
              </Link>

              <Link
                to="https://www.linkedin.com/in/suraj-verma-a4a8b8221"
                class="rounded-full border border-black px-6 py-2 text-sm font-semibold text-black shadow-sm flex"
              >
                Let's Connect &nbsp;
                <svg
                  class="w-6 h-6 text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
