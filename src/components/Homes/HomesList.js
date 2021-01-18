/* eslint react/prop-types: 0 */
import React from "react";

export default function HomesList({ homes }) {
  // const x = homes?.[0] ? homes[0].location : null;
  // console.log("homesList", x);

  console.log("yayeet", homes);

  return (
    <section className="w-screen lg:w-1/2 pl-4">
      <div className="border-b border-gray-200 py-4">
        <p>300+ stays</p>
        <h1 className="font-bold text-3xl">Stays in Big Bear Lake</h1>
        <div className="my-5">
          <Buttons name="Cancellation flexiblity" />
          <Buttons name="Entire Place" />
          <Buttons name="Price" />
          <Buttons name="Instant Book" />
          <Buttons name="More filters · 1" />
        </div>
        <p>
          Review COVID-19 travel restrictions before you book.{" "}
          <span className="border-b border-black">Learn More</span>
        </p>
      </div>

      <div>
        {homes
          ? homes.map((item) => {
              const {
                amenities,
                baths,
                bedrooms,
                beds,
                guests,
                image,
                key,
                title,
              } = item;
              return (
                <HomeItem
                  key={key}
                  src={image}
                  title={title}
                  guests={guests}
                  bedrooms={bedrooms}
                  beds={beds}
                  baths={baths}
                  amenities={amenities}
                />
              );
            })
          : null}
      </div>
    </section>
  );
}

function Buttons({ name }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-3 py-1.5 border border-black text-xs font-medium rounded-full shadow-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2 my-1"
    >
      {name}
    </button>
  );
}

function HomeItem({
  src,
  location,
  title,
  guests,
  bedrooms,
  beds,
  baths,
  amenities,
}) {
  return (
    <div className="flex border-b border-gray-200 p-4 pl-0 flex-col lg:flex-row">
      <img className="lg:w-72 lg:h-54 object-cover rounded" src={src} />
      <div className="flex flex-col">
        <div className="border-b border-gray-200 p-3">
          <p className="text-gray-500 text-sm">Entire house in {location}</p>
          <p className="text-lg">{title}</p>
        </div>
        <div className="text-gray-500 p-3">
          <p>
            {guests} guests · {bedrooms} bedrooms · {beds} beds · {baths} baths
          </p>
          <p>{amenities}</p>
        </div>
      </div>
    </div>
  );
}
