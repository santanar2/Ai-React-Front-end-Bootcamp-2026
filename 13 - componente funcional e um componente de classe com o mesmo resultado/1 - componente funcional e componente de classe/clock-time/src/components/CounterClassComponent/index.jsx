import { Component } from "react";

class CounterClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date()
        };

    }

    increase = () => {
        this.setState((previousState) => ({
            count: previousState.count + 1
        }));
    };

    render() {
        const { message } = this.props;
        const { count } = this.state;

    return(
        <div>
            <h1>{message}</h1>
            <h2>Contador: {count}</h2>
            <button className="button" onClick={this.increase}>Adicionar</button>
        </div>

        )

    }
}

export default CounterClassComponent;
