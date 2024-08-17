import React from "react";

function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container m-auto px-24 text-gray-600">
        <div className="flex items-center justify-center gap-24">
          <div className="w-1/2">
            <h2 className="text-5xl text-gray-900 font-bold">
              Java Full <br /> Stack Developer
            </h2>
            <p className="mt-8 text-lg text-gray-600">
              Hi Everyone, I am
              <span className="text-black font-semibold"> Suraj</span>. I
              recently completed graduation from
              <span className="text-black font-semibold">
                Atma Ram Sanatan Dharma College
              </span>
              , Delhi University in the field of Electronics.
            </p>
            <p className="mt-1 text-lg text-gray-600">
              I am a passionate java developer. I learnt
              <span className="text-black font-semibold">Back-end</span>
              technologies like Spring Boot, Spring Security, Hibernate,
              Microservices, Junit, Postman and
              <span className="text-black font-semibold">Front-end</span>
              technologies like Html, Css, Javascript, React, Tailwind. Also, I
              have good graps on MySql and MongoDB
              <span className="text-black font-semibold">
                database management systems
              </span>
              . a lot.
            </p>
            <p className="mt-2 text-lg text-gray-600">
              Apart from coding, I love to play Chess, Watchig Sport and Travel
              a lot.
            </p>
          </div>
          <div className="w-1/3">
            <img
              src="/assets/myphoto.jpg"
              alt="image"
              className="photo-rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
