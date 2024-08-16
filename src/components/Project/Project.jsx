import React from "react";

function Project() {
  return (
    <div class="mx-auto max-w-7xl px-2 pb-12">
      <div class="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="shadow-2xl border-2 border-black/50 rounded-md">
          <img
            src="/assets/projects/journal.png"
            class="aspect-video w-full rounded-md"
          />
          <div class="min-h-min p-3">
            <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
              #Java #Spring Boot #MongoDB #Postman
            </p>
            <p class="mt-2 flex-1 text-base font-semibold text-gray-900">
              Journal App
            </p>
            <p class="mt-2 w-full text-sm leading-normal text-gray-600">
              This application allows users to create and manage their journal
              entries securely.
            </p>
          </div>
        </div>
        <div class="shadow-2xl border-2 border-black/50 rounded-md">
          <img
            src="/assets/projects/devsearch.png"
            class="aspect-video w-full rounded-md"
          />
          <div class="min-h-min p-3">
            <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
              #Python #DJango #SQlite
            </p>
            <p class="mt-2 flex-1 text-base font-semibold text-gray-900">
              DevSearch
            </p>
            <p class="mt-2 w-full text-sm leading-normal text-gray-600">
              A social media app for developer in which many developer are
              connected together and share their project.
            </p>
          </div>
        </div>
        <div class="shadow-2xl border-2 border-black/50 rounded-md">
          <img
            src="/assets/projects/employee.png"
            class="aspect-video w-full rounded-md"
          />
          <div class="min-h-min p-3">
            <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
              #Python #DJango #SQlite
            </p>
            <p class="mt-2 flex-1 text-base font-semibold text-gray-900">
              Employee Management
            </p>
            <p class="mt-2 w-full text-sm leading-normal text-gray-600">
              Display a list of all employees with basic information such as
              name, designation, department, and contact details.
            </p>
          </div>
        </div>
        <div class="shadow-2xl border-2 border-black/50 rounded-md">
          <img
            src="/assets/projects/deep.png"
            class="aspect-video w-full rounded-md"
          />
          <div class="min-h-min p-3">
            <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
              #HTML5 #CSS3
            </p>
            <p class="mt-2 flex-1 text-base font-semibold text-gray-900">
              Deep thought
            </p>
            <p class="mt-2 w-full text-sm leading-normal text-gray-600">
              An Overview of an E-learning platform Deep Thought.
            </p>
          </div>
        </div>
        <div class="shadow-2xl border-2 border-black/50 rounded-md">
          <img
            src="/assets/projects/amazon.png"
            class="aspect-video w-full rounded-md"
          />
          <div class="min-h-min p-3">
            <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
              #HTML5 #CSS3
            </p>
            <p class="mt-2 flex-1 text-base font-semibold text-gray-900">
              Amazon Clone
            </p>
            <p class="mt-2 w-full text-sm leading-normal text-gray-600">
              A Clone of Amazon.com website built with the dep concept of the
              HTML and the CSS.
            </p>
          </div>
        </div>
        <div class="shadow-2xl border-2 border-black/50 rounded-md">
          <img
            src="/assets/projects/coursify.png"
            class="aspect-video w-full rounded-md"
          />
          <div class="min-h-min p-3">
            <p class="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
              #HTML5 #CSS3 #JavaScript
            </p>
            <p class="mt-2 flex-1 text-base font-semibold text-gray-900">
              Coursify Website
            </p>
            <p class="mt-2 w-full text-sm leading-normal text-gray-600">
              The frontend project for the candidate hiring website demo creates
              a user-friendly interface connecting employers and job seekers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
