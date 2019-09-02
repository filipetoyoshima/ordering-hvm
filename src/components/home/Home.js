import React from 'react'
import Game from '../game/Game';
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number_of_cells: 10,
            number_of_cells_text: '10',
            is_game_running: false,
        }

        this.handleInput = this.handleInput.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    render() {
        if (this.state.is_game_running) {
            return (
                <Game
                    number_of_cards={this.state.number_of_cells}
                />
            )
        } else {
            return (
                <div className='choose-container'>
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
    }

    handleInput(event) {
        let number = parseInt(event.target.value);
        this.setState({
            number_of_cells_text: event.target.value,
            number_of_cells: number
        })
    }

    startGame(event) {
        this.setState({
            is_game_running: true
        })
    }
}

export default Home;