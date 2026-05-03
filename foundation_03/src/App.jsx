import "./App.css";
import AvatarCard from "./components/AvatarCard.jsx";

const avatars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV",
  },
  {
    id: 2,
    name: "Luna",
    role: "Lightkeeper",
    power: "Illumination",
    initials: "LN",
  },
  {
    id: 3,
    name: "Atlas",
    role: "Architect",
    power: "Structure",
    initials: "AT",
  },
  {
    id: 4,
    name: "Orion",
    role: "Scout",
    power: "Tracking",
    initials: "ON",
  },
  {
    id: 5,
    name: "Vega",
    role: "Strategist",
    power: "Tactics",
    initials: "VG",
  },
];

function Shell({ title, children }) {
  return (
    <section>
      <p>Resuable shell</p>
      <h2>{title}</h2>
      {children}
      <p>this is for test</p>
    </section>
  );
}

function App() {
  return (
    <>
      <h1>Children in react</h1>
      <Shell title="Batman">
        <div>
          <h1>This is inside shell</h1>
          <p>this is also inside shell</p>
        </div>
      </Shell>

      <h1>Hello from Rachit</h1>
      <section>
        {avatars.map((avatar) => (
          <AvatarCard
            key={avatar.id}
            level={avatar.id === 1 ? "Captain" : undefined}
            avatar={avatar}
          />
        ))}
      </section>
    </>
  );
}

export default App;
