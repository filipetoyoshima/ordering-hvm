import React from 'react'
import Number_Box from '../number_box/Number_Box';

import './Game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            last_selected: null,
        }

        this.selectCard = this.selectCard.bind(this);
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
                {this.state.cards.map((card, index) => {
                    let selected = false;
                    
                    if (index == this.state.last_selected) {
                        selected = true;
                    }

                    return (
                        <div
                            className='card'
                            onClick={() => this.selectCard(index)}
                            key={'cont-' + index}
                        >
                            <Number_Box
                                number={card}
                                is_open={true}
                                index={index}
                                key={index}
                                selected={selected}
                            />
                        </div>
                    );
                }
                )}
            </div>
        )
    }

    selectCard (index) {
        let previous = this.state.last_selected;
        if (previous === null) {
            this.setState ({
                last_selected: index,
            })
        } else {
            let arr = this.state.cards;
            let aux = arr[previous];
            arr[previous] = arr[index];
            arr[index] = aux;
            
            console.log(arr, 'arr')

            this.setState ({
                last_selected: null,
                cards: arr,
            })
        }
    }
}

export default Game;