import { useState } from "react";

const CounterFunctionalComponent = ({message}) =>  {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((previousCount) => previousCount + 1);
    }

    return (
        <div className="clock">
            <h1>{message}</h1>
            <h2>Contador: {count}</h2>
            <button className="button" onClick={increase}>Adicionar</button>
        </div> 
    )

}

export default CounterFunctionalComponent;
