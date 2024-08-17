import React from "react";
import { useParams } from "react-router-dom";

function SinglePage() {
  const { useId } = useParams();
  return (
    <div className="mt-20 py-10">
      <div className="text-center">
        <p className="text-6xl font-bold text-black">{useId}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Received Text
        </h1>
      </div>
    </div>
  );
}

export default SinglePage;
