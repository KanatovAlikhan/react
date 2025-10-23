import React, { useState, useEffect } from "react";
import DogCard from "./DogCard";
import "./DogList.css";

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    loadDogs();
  }, []);

  const getBreedName = (url) => {
    const parts = url.split("/");
    return parts[4]?.replace("-", " ") || "unknown";
  };

  const filteredDogs = dogs.filter((dog) =>
    getBreedName(dog).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dog-list">
      <button onClick={loadDogs} disabled={loading}>
        {loading ? "Loading..." : "Load Dogs"}
      </button>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search breed..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={() => setSearch("")}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            backgroundColor: "#ffcb05",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      <ul>
        {filteredDogs.map((dog, index) => (
          <DogCard key={index} dog={dog} />
        ))}
      </ul>

      {dogs.length > 0 && filteredDogs.length === 0 && (
        <p>No breeds found for "{search}"</p>
      )}
    </div>
  );
}
