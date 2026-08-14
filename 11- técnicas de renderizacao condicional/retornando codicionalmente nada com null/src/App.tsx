import './App.css'
import Item from './Item/index'


const itemsList = [
  {id: "meias", name: "Meias", check: true},
  {id: "camiseta", name: "Camiseta", check: false},
  {id: "calca", name: "Calça", check: false},
  {id: "tenis", name: "Tênis", check: true},
  {id: "bermuda", name: "Bermuda", check: false},
  {id: "jaqueta", name: "Jaqueta", check: true},
];

function App() {
  return (
    <div className="List">
      <h1>Itens para colocar na mala</h1>
      {itemsList.map((item) => {
        if (item.check) {
          return <Item name={item.name} check={item.check} key={item.id} />;
        }

        return <Item name={item.name} check={item.check} key={item.id} />;
      })}
      </div>
  );
}

export default App
