import React from 'react'
import NumberBoxContainer from '../number_box_container/NumberBoxContainer';
import BubbleSort from '../../sortingAlgorithms/bubbleSort';
import SelectionSort from '../../sortingAlgorithms/selectionSort';

import './Game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            bubble: null,
            bubble_cards: [],
            selection: null,
            selection_cards: [],
            last_selected: null,
            did_player_sorted: false,
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
            bubble_cards: arr.slice(0),
            bubble: new BubbleSort(arr.slice(0)),
            selection_cards: arr.slice(0),
            selection: new SelectionSort(arr.slice(0)),
        })
    }

    render () {
        return (
            <div>
                {this.state.did_player_sorted ?
                    (<h1>Finished!</h1>)
                :
                    (<></>)
                }
                <h2>This is your array</h2>
                <NumberBoxContainer
                    player='PLAYER'
                    cards={this.state.cards}
                    last_selected={this.state.last_selected}
                    selectCard={this.selectCard}
                />
                <br/>
                <h2>This is Bubble Sort</h2>
                <NumberBoxContainer
                    player='BOT'
                    cards={this.state.bubble_cards}
                />
                <h2>This is Selection Sort</h2>
                <NumberBoxContainer
                    player='BOT'
                    cards={this.state.selection_cards}
                />
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
            this.swap(previous, index);

            this.setState ({
                last_selected: null,
            })

            if (index != previous) {
                this.setState({
                    bubble_cards: this.state.bubble.step(),
                    selection_cards: this.state.selection.step()
                })
            }
        }

        this.checkOrder();
    }

    swap (i, j) {
        let arr = this.state.cards;
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
        
        this.setState ({
            cards: arr,
        })
    }

    checkOrder () {
        let arr = this.state.cards;
        let prev = arr[0];
        let i = 0;

        for (; i < arr.length && prev <= arr[i]; i++) {
            prev = arr[i];
        }

        if (i == arr.length) {
            this.setState({
                did_player_sorted: true
            })
        }
        return false;
    }
}

export default Game;