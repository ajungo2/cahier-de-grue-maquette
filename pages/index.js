import EquipmentCard from "../components/EquipmentCard";

const dummyData = [
  { id: 1, name: "Grue 1", status: "green" },
  { id: 2, name: "Palan A", status: "orange" },
  { id: 3, name: "Monte-charge", status: "red" },
];

export default function Home() {
  return (
    <div className="dashboard">
      <h1>Tableau de bord • Cahier de Grue</h1>
      <div className="eq-list">
        {dummyData.map(eq => (
          <EquipmentCard key={eq.id} eq={eq} />
        ))}
      </div>
    </div>
  );
}
