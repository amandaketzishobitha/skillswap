import React from "react";

function ProfileCard({ name, role, onRemove }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default ProfileCard;
