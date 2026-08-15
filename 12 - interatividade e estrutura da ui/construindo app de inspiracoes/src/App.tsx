import "./App.css";
import Copyright from "./components/FancyText/Copyright";
import FancyText from "./components/FancyText";
import InspirationGenerator from "./components/FancyText/InspirationGenerator";

function App() {
  return (
      
      <>
        <FancyText title={true} text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2026} />
        </InspirationGenerator>
      </>
    
  );
}

export default App;