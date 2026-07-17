type Coffee = {
  name: string;
  description: string;
  preparationTime: number;
};

const coffees: Coffee[] = [
  {
    name: "Ice Caramel Macchiato",
    description: "Rico e com toque de baunilha",
    preparationTime: 3,
  },
  {
    name: "Caffé Mocha",
    description: "Café com chocolate e leite vaporizado",
    preparationTime: 3,
  },
  {
    name: "Starbucks Blond Vanilla Late",
    description: "Latte com sabor aveludado de baunilha",
    preparationTime: 3,
  },
  {
    name: "Sparking Expresso",
    description: "Expresso com bolhas de café",
    preparationTime: 3,
  },
  {
    name: "Affogato",
    description: "Sorvete derretido em café quente",
    preparationTime: 3,
  },
];

export function List() {
  const listItems = coffees.map((coffee) => (
    <li key={coffee.name}>
      <strong>{coffee.name}</strong>: {coffee.description}
    </li>
  ));
  const topSale = coffees.filter(
    (coffee) => coffee.name === "Caffé Mocha" || coffee.name === "Affogato",
  );

  return (
    <>
      <h3>Os cafés mais vendidos:</h3>
      <ul className="list-text">
        {topSale.map((coffee) => (
          <li key={coffee.name}>{coffee.name}</li>
        ))}
      </ul>
      <ul className="list-text">{listItems}</ul>
    </>
  );
}
