/* eslint react/prop-types: 0 */
import React from "react";
import { Link } from "gatsby";

function Places({ src, name, timeDistance }) {
  return (
    <div className="flex ">
      <img className="w-16 h-16 rounded" src={src}></img>
      <div className="flex flex-col justify-center align-items p-4">
        <p className="font-semibold ">{name}</p>
        <p>{timeDistance}</p>
      </div>
    </div>
  );
}

function Homes({ src, type, to }) {
  return (
    <Link className="col-span-1" to={to}>
        <img className="rounded w-full" src={src} />
        <p className="text-lg font-semibold mb-4 md:mb-0">{type}</p>
    </Link>
  );
}

export default function LiveAnywhere() {
  return (
    <section className="px-4">
      <div className="mx-auto max-w-7xl flex flex-wrap py-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Places
          src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
          name="Big Bear Lake"
          timeDistance="2.5 hour drive"
        />
        <Places
          src="https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240"
          name="Lake Arrowhead"
          timeDistance="2 hour drive"
        />
        <Places
          src="https://a0.muscache.com/im/pictures/08b33515-49eb-4b9b-8e60-f962fb7e700b.jpg?im_q=medq&im_w=240"
          name="Joshua Tree"
          timeDistance="3 hour drive"
        />
        <Places
          src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240"
          name="Idyllwild-Pine Cove"
          timeDistance="2.5 hour drive"
        />
        <Places
          src="https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240"
          name="Mammoth Lakes"
          timeDistance="7 hour drive"
        />
        <Places
          src="https://a0.muscache.com/im/pictures/c2eba2e9-0d80-4704-9e2c-34ac16316c53.jpg?im_q=medq&im_w=240"
          name="Yucca Valley"
          timeDistance="2.5 hour drive"
        />
        <Places
          src="https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=240"
          name="Malibu"
          timeDistance="1.5 hour drive"
        />
        <Places
          src="https://a0.muscache.com/im/pictures/fe8fa537-f8ab-45a3-aae9-723b395819a1.jpg?im_q=medq&im_w=240"
          name="Los Angeles"
          timeDistance="0.5 hour drive"
        />
      </div>

      <div className="max-w-7xl mx-auto mb-12 ">
        <h1 className="text-3xl font-semibold pb-4">Live Anywhere</h1>
        <div className="flex justify-between flex-col md:flex-row grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Homes
            to="/homes"
            src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
            type="Entire Homes"
          />
          <Homes
            to="#"
            src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=480"
            type="Cabins and cottages"
          />
          <Homes
            to="#"
            src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
            type="Unique stays"
          />
          <Homes
            to="#"
            src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=480"
            type="Pets Welcome"
          />
        </div>
      </div>
    </section>
  );
}
