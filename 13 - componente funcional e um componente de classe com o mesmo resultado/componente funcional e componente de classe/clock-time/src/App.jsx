import './App.css';
import CounterClassComponent from './components/CounterClassComponent';
import CounterFunctionalComponent from './components/CounterFenctionalComponet';

function App() {
  return (
    <>
      <CounterFunctionalComponent message="Functional Component:" />
      <CounterClassComponent message="Class Component:" />
    </>
  );
}
export default App;
