import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    handleClick = () => {
        this.props.onClickValue(this.props.increamentValue);
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.props.increamentValue}
            </button>
        );
    }
}

class Result extends React.Component {
    render() {
        return <p>{this.props.value}</p>
    }
}

class App extends React.Component {
    state = { counter: 0 }

    increament = (value) => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + value
            };
        });
    };

    render() {
        return (
            <div>
                <Button increamentValue={1} onClickValue={this.increament}/>
                <Button increamentValue={5} onClickValue={this.increament} />
                <Button increamentValue={10} onClickValue={this.increament} />
                <Result value={this.state.counter}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));