import React from "react";

function SkillCard({ name, offer, want, onDelete }) {
  return (
    <div className="skill-card">
      <h3>{name}</h3>
      <p>Offers: <strong>{offer}</strong></p>
      <p>Wants: <strong>{want}</strong></p>
      {onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}

export default SkillCard;
