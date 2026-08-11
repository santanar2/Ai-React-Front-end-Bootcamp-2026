import './App.css'
import Item from './Item/index'


function App() {
  return (
    <div className='list'>
      <h1>Itens para colocar na mala</h1>

      <Item name="Camisa" check />
      <Item name="Calça" check />
      <Item name="Tênis" check />
      <Item name="Meias"  />
      <Item name="Chinelo" check/>
      <Item name="Bermuda"  />

      
    </div>
  )
}

export default App
