import Carrousel from "../../Carroussel/Carroussel";

export default function Home() {
  return (
    <div>
      <h1>Oeuvre du moment</h1>
      <Carrousel />
      <h1>Nouveaux</h1>
      <Carrousel />
      <Carrousel />
    </div>
  );
}
