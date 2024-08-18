import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/surajverma02")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const data = useLoaderData()

  return (
    <div className="py-32 bg-white">
      <div className="container m-auto px-24 text-gray-600">
        <div className="flex items-center justify-center gap-24">
          <div className="w-2/5 shadow-xl py-12 px-5">
            <h2 className="text-5xl text-gray-900 font-bold">{data.name}</h2>
            <p className="mt-4 text-justify text-base text-gray-600">
              {data.bio}
            </p>
            <div className="text-base font-bold mt-2 flex flex-col">
              <p>Total Repository: {data.public_repos} </p>
              <p>Followers: {data.followers} </p>
              <p>Followings: {data.following}</p>
            </div>
          </div>
          <div className="w-1/4 p-2">
            <img
              src={data.avatar_url}
              alt="image"
              className="rounded-full border-8 border-black/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;


export const githubInfoLoader = async ()=>{
  const response = await fetch("https://api.github.com/users/surajverma02")
  .then(res => res.json())

  return response
}
