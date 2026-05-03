import "./App.css";

const shows = [
  {
    id: 1,
    title: "The Component Returns",
    time: "10:00 AM",
    hall: "Hall A",
  },
  {
    id: 2,
    title: "React Rumble",
    time: "11:00 AM",
    hall: "Hall B",
  },
  {
    id: 3,
    title: "JavaScript Jam",
    time: "12:00 PM",
    hall: "Hall C",
  },
  {
    id: 4,
    title: "Code Carnival",
    time: "1:00 PM",
    hall: "Hall A",
  },
  {
    id: 5,
    title: "Dev Dance",
    time: "2:00 PM",
    hall: "Hall B",
  },
];

// fetch -> API -> Data -> variable

function App() {
  return (
    <>
      <h1>Hello {shows[0].title} from project 2</h1>
      <section className="grid">
        {shows.map((show) => (
          <article>
            <p className="tag">{show.hall}</p>
            <h3>{show.title}</h3>
            <p className="muted">{show.time}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
