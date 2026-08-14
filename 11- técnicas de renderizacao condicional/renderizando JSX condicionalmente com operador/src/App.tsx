import './App.css'
import Item from './Item/index'


const itemsList = [
  {id: "meias", name: "Meias", check: true, count: 3},
  {id: "camiseta", name: "Camiseta", check: false, count: 1},
  {id: "calca", name: "Calça", check: false, count: 1},
  {id: "tenis", name: "Tênis", check: true, count: 2},
  {id: "bermuda", name: "Bermuda", check: false, count: 1},
  {id: "jaqueta", name: "Jaqueta", check: true, count: 1},
];

function App() {
  return (
    <div className="List">
      <h1>Itens para colocar na mala</h1>
      {itemsList.map((item) => {
        if (item.check) {
          return <Item name={item.name} check={item.check} count={item.count} key={item.id} />;
        }

        return <Item name={item.name} check={item.check} key={item.id} />;
      })}
      </div>
  );
}

export default App
