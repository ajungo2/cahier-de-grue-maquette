export default function EquipmentCard({ eq }) {
  return (
    <div className="eq-card">
      <h2>{eq.name}</h2>
      <div className={`status ${eq.status}`}>
        {eq.status === "green" && "🟢 OK"}
        {eq.status === "orange" && "🟠 Défaut"}
        {eq.status === "red" && "🔴 Urgent"}
      </div>
      <button style={{ marginTop: 15 }}>Voir détails</button>
    </div>
  );
}
