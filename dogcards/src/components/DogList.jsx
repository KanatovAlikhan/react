import React, { useState } from "react";
import DogCard from "./DogCard";
import "./DogList.css";

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadDogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
      const data = await res.json();
      setDogs(data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dog-list">
      <button onClick={loadDogs} disabled={loading}>
        {loading ? "Loading..." : "Load Dogs"}
      </button>

      <ul>
        {dogs.map((dog, index) => (
          <DogCard key={index} dog={dog} />
        ))}
      </ul>
    </div>
  );
}
