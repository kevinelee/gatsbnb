import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomesList from "../components/Homes/HomesList";
// import Map from "../components/Homes/Map"
import MapContainer from "../components/Homes/ReactMap";
import {useFirebaseContext} from '../firebase-helper'

export default function HomesPage() {
  const firebase = useFirebaseContext();
  const ref = firebase.firestore().collection(`homes`);
  const [homes, setHomes] = useState(null);

  useEffect(() => {
    ref
      .get()
      .then((snapshot) => {
        if (!snapshot) {
          setHomes([]);
        } else {
          let homes = [];

          snapshot.forEach((home) => {
            const homeData = home.data();

            homes.push({ key: home.id, ...homeData });
          });

          setHomes(homes);
        }
    });
  }, []);

  return (
    <Layout>
      <SEO keywords={[`homes`, `map`, `react`, `tailwindcss`]} title="Homes" />

      <main className="flex w-screen flex justify-around max-w-7xl ">
        <HomesList homes={homes} />
        <MapContainer homes={homes} />
      </main>
    </Layout>
  );
}
