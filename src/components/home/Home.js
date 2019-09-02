import React from 'react'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number_of_cells: '10',
            is_game_running: false,
        }

        this.handleInput = this.handleInput.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    render() {

        return (
            <div className='container'>
                <label>
                    How many numbers?
                </label>
                <br />
                <input
                    id="number-of-cells"
                    onChange={this.handleInput}
                    type='number'
                    value={this.state.number_of_cells}
                />
                <button onClick={this.startGame}>
                    Go
                </button>
            </div>
        )
    }

    handleInput(event) {
        this.setState({
            number_of_cells: event.target.value
        })
    }

    startGame(event) {
        this.setState({
            is_game_running: true
        })
    }
}

export default Home;