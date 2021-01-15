/* eslint react/prop-types: 0 */
import React from "react";

function Host({ img, title }) {
  return (
    <div className="mb-4">
      <img className="w-96 md:w-full rounded lg:w-96" src={img}></img>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
}

export default function JoinMillions() {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl mb-6">
          Join Millions of host on Airbnb
        </h1>
        <div className="flex justify-between flex-col lg:flex-row">
          <Host
            img="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=480"
            title="Host your home"
          />
          <Host
            img="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=480"
            title="Host an online experience"
          />
          <Host
            img="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=480"
            title="Host an experience"
          />
        </div>
      </div>
    </section>
  );
}
