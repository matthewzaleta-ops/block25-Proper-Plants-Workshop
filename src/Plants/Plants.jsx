import Plant from "./Plant";

const Plants = ({ plants, addToCart }) => {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => {
          return <Plant plant={plant} key={plant.id} addToCart={addToCart} />;
        })}
      </ul>
    </section>
  );
};

export default Plants;
