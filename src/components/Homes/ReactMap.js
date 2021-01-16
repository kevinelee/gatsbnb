/* eslint-disable react/prop-types */
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MapContainer({ homes }) {
  const mapStyles = {
    height: "100vh",
  };

  const defaultCenter = {
    lat: 34.0522,
    lng: -118.2437,
  };

  return (
    <div className="sticky h-screen w-1/2" style={{ top: "0px" }}>
      <LoadScript googleMapsApiKey={process.env.GATSBY_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {/* <Marker key="1" position={{ lat: 39.0522, lng: -118.2437 }} /> */}
          {homes && homes.length > 0
            ? homes.map((item) => {
                return (
                  <Marker
                    key={item.key}
                    position={{ lat: item.location.x_, lng: item.location.N_ }}
                  />
                );
              })
            : null}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

// const locations = [
//   {
//     name: "Location 1",
//     location: {
//       lat: 34.0522,
//       lng: -118.2437,
//     },
//   },
//   {
//     name: "Location 2",
//     location: {
//       lat: 41.3917,
//       lng: 2.1649,
//     },
//   },
//   {
//     name: "Location 3",
//     location: {
//       lat: 41.3773,
//       lng: 2.1585,
//     },
//   },
//   {
//     name: "Location 4",
//     location: {
//       lat: 41.3797,
//       lng: 2.1682,
//     },
//   },
//   {
//     name: "Location 5",
//     location: {
//       lat: 41.4055,
//       lng: 2.1915,
//     },
//   },
// ];

// console.log("homie", homes);
