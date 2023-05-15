import Fact from "./Fact";

function FactList({ facts, setFacts }) {
  return (
    <section>
      <ul className="facts-lists">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p className="title">
        There are {facts.length} facts in the database. Add your own!
      </p>
    </section>
  );
}

export default FactList;
