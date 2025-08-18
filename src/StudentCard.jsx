// StudentCard.jsx
// A reusable component that receives props
export default function StudentCard({ name, course, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{course}</p>
      <button className="danger" onClick={onDelete}>Delete</button>
    </div>
  );
}
