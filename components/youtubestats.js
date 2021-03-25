import React from "react";

export default function YouTubeStat({ label, number }) {
  return (
    <div>
      <p>{label}</p>
      <p>{number}</p>
    </div>
  );
}
