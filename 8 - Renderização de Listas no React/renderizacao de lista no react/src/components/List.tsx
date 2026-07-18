import  {  v4  as  uuidv4  }  from  'uuid' ;
import { TopSaleCoffee } from "./TopSaleCoffee";

type Coffee = {
  id: string;
  name: string;
  description: string;
  preparationTime: number;
};

const coffees: Coffee[] = [
  {
    id: uuidv4 ( ),
    name: "Ice Caramel Macchiato",
    description: "Rico e com toque de baunilha",
    preparationTime: 3,
  },
  {
    id: uuidv4 ( ),
    name: "Caffé Mocha",
    description: "Café com chocolate e leite vaporizado",
    preparationTime: 3,
  },
  {
    id: uuidv4 ( ),
    name: "Starbucks Blond Vanilla Late",
    description: "Latte com sabor aveludado de baunilha",
    preparationTime: 3,
  },
  {
    id: uuidv4 ( ),
    name: "Sparking Expresso",
    description: "Expresso com bolhas de café",
    preparationTime: 3,
  },
  {
    id: uuidv4 ( ),
    name: "Affogato",
    description: "Sorvete derretido em café quente",
    preparationTime: 3,
  },
];

export function List() {
  const listItems = coffees.map((coffee) => (
    <li key={coffee.id}>
      <strong>{coffee.name}</strong>: {coffee.description}
    </li>
  ));
  const topSale = coffees.filter(
    (coffee) =>
      coffee.name.toLowerCase().includes("mocha") ||
      coffee.name.toLowerCase().includes("affogato"),
  );

  return (
    <>
      <h3>Os cafés mais vendidos:</h3>
      <ul className="top-sale-list list-text">
        {topSale.map((coffee) => (
          <li key={coffee.id}>
            <TopSaleCoffee name={coffee.name} description={coffee.description} preparationTime={coffee.preparationTime} />
          </li>
        ))}
      </ul>
      <ul className="list-text">{listItems}</ul>
    </>
  );
}
