import React, { useEffect, useState } from "react";

function Github() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/surajverma02')
    .then((res)=>res.json())
    .then((data)=>setData(data))
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="container m-auto px-24 text-gray-600">
        <div className="flex items-center justify-center gap-24">
          <div className="w-1/2">
            <h2 className="text-5xl text-gray-900 font-bold">
              {data.name}
            </h2>
            <p className="mt-8 text-lg text-gray-600">
              {data.bio}
            </p>
            <h4 className="text-base font-bold mt-2">
              Followers: {data.followers} <br />  
              Followings: {data.following}
            </h4>
            
          </div>
          <div className="w-1/4">
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
