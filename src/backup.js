import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {


    incrementFunction = () => {
        this.props.onClickFunction(this.props.incrementValue)
    };

    render() {
        return (
            <button onClick={this.incrementFunction}>
                {this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

class App extends React.Component {

    state = { counter: 0 };

    handleClick = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.handleClick} />
                <Button incrementValue={5} onClickFunction={this.handleClick} />
                <Button incrementValue={10} onClickFunction={this.handleClick} />
                <Button incrementValue={20} onClickFunction={this.handleClick} />
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const Button = (props) => {
//     return (
//         <button> {props.label}</button>
//     );
// };

    // handleClick = () => {
    //     this.setState((prevState) => {
    //         return {
    //             counter : prevState.counter + 1
    //         };
    //     });
    // };
    // handleClick = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }