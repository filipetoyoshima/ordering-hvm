import React from 'react'
import Number_Box from '../number_box/Number_Box';

import './Game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount () {
        let i=0;
        let arr=[];
        
        for (i=0; i<this.props.number_of_cards; i++) {
            let r = Math.floor(Math.random() * 100);
            arr.push(r);
        }

        this.setState({
            cards: arr,
        })
    }

    render () {
        return (
            <div>
                {this.state.cards.map((card, index) =>
                    <div
                        className='card'
                    >
                        <Number_Box
                            number={card}
                            is_open={true}
                            index={index}
                            key={index}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Game;