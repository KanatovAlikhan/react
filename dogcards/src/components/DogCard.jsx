import React from "react";
import "./DogCard.css";

export default function DogCard({ dog }) {
  return (
    <li className="dog-card">
      <img src={dog} alt="Dog" />
    </li>
  );
}
