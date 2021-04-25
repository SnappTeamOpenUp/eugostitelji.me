import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "./Item";

export const Content = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);
  const updatePibs = (pib) => {
    axios
      .put(
        `https://f14iah3bhi.execute-api.us-east-2.amazonaws.com/dev/places/${pib}`
      )
      .then((res) => {
        console.log(res);
        console.log("Updated;");
        fetchPlaces();
      })
      .catch((err) => console.log(err));
  };
  const fetchPlaces = () => {
    console.log("fetching");
    axios
      .get("https://f14iah3bhi.execute-api.us-east-2.amazonaws.com/dev/places")
      .then((res) => {
        setPlaces(res.data);
      });
  };

  const renderItems = (arr) => {
    return arr.map((el) => (
      <Item
        name={el.lastUpdated}
        pib={el.pib}
        userId={el.userId}
        updatePibs={updatePibs}
      />
    ));
  };
  return (
    <div>
      {places.length ? (
        renderItems(places)
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};
