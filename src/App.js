import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
        console.log(this.state, 'state');
    }

    render() {
        const {
            newValue,
            clickButton
        } = this.props;

        const { inputValue } = this.state;

        return (
            <div className="App" style={{ paddingTop: '10px' }}>
                <input
                    type='text'
                    onChange={this.inputChange}
                    value={inputValue}
                />
                <button onClick={() => clickButton(inputValue)}>
                    Click me!
                </button>
                <h1>{newValue}</h1>
            </div>
        );
    }
}


const mapStateToProps = store => ({
    newValue: store.clickState.newValue
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);