/* eslint react/prop-types: 0 */
import React from "react";

function Experiences({ src, title, shortDetail }) {
  return (
    <div className="mb-4">
      <img className="rounded w-96 md:w-full lg:w-96" src={src} />
      <p className="font-semibold">{title}</p>
      <p>{shortDetail}</p>
    </div>
  );
}

export default function ExperienceTheWorld() {
  return (
    <section className="bg-black text-white px-4">
      <div className=" max-w-7xl mx-auto py-12">
        <h1 className=" text-3xl font-bold ">Experience the World</h1>
        <p className="mb-4">
          Unique activities with local experts—in person or online.
        </p>
        <div className="flex justify-between flex-col lg:flex-row">
          <Experiences
            src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480"
            title="Online Experiences"
            shortDetail="Travel the world without leaving home."
          />
          <Experiences
            src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=480"
            title="Experiences"
            shortDetail="Things to do wherever you are."
          />
          <Experiences
            src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=480"
            title="Adventures"
            shortDetail="Multi-day trips with meals and stays."
          />
        </div>
      </div>
    </section>
  );
}
