import "./App.css";
import { DoubleNumber } from "../components/DoubleNumber";

function App() {
    return (
        
        <main>
            <DoubleNumber number={2} />
            <DoubleNumber number={3} />
            <DoubleNumber number={4} /> 
            <DoubleNumber number={5} />
        </main>
        
        );
}

export default App;
