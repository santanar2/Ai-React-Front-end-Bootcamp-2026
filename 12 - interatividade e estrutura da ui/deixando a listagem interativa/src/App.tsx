import './App.css'
import { useState } from 'react'
import Item from './Item/index'

type ItemType = {
  id: string
  name: string
  check: boolean
}

const itemsList: ItemType[] = [
  { id: 'meias', name: 'Meias', check: true },
  { id: 'camiseta', name: 'Camiseta', check: false },
  { id: 'calca', name: 'Calça', check: false },
  { id: 'tenis', name: 'Tênis', check: true },
  { id: 'bermuda', name: 'Bermuda', check: false },
  { id: 'jaqueta', name: 'Jaqueta', check: true },
]

function App() {
  const [items, setItems] = useState<ItemType[]>(itemsList)

  function toggleItem(id: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item,
      ),
    )
  }

  return (
    <div className="list">
      <h1>Itens para colocar na mala</h1>
      {items.map((item) => (
        <Item key={item.id} name={item.name} check={item.check} onToggle={() => toggleItem(item.id)} />
      ))}
    </div>
  )
}

export default App
