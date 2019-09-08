import React from 'react'
import NumberBoxContainer from '../number_box_container/NumberBoxContainer';
import BubbleSort from '../../sortingAlgorithms/bubbleSort';
import SelectionSort from '../../sortingAlgorithms/selectionSort';
import InsertionSort from '../../sortingAlgorithms/selectionSort';

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
            insertion: null,
            insertion_cards: [],
            last_selected: null,
            did_player_sorted: false,
            insertionWinner: false,
            selectionWinner: false,
            bubbleWinner: false,
            humanWinner: false,
            insertionLoser: false,
            selectionLoser: false,
            bubbleLoser: false,
            humanLoser: false,
            Text: ''
        }

        this.selectCard = this.selectCard.bind(this);
    }

    componentDidMount() {
        let i = 0;
        let arr = [];

        for (i = 0; i < this.props.number_of_cards; i++) {
            let r = Math.floor(Math.random() * 100);
            arr.push(r);
        }

        this.setState({
            cards: arr,
            bubble_cards: arr.slice(0),
            bubble: new BubbleSort(arr.slice(0)),
            selection_cards: arr.slice(0),
            selection: new SelectionSort(arr.slice(0)),
            insertion_cards: arr.slice(0),
            insertion: new InsertionSort(arr.slice(0)),
        })
    }

    render() {
        return (
            <main>
                {this.state.humanWinner || this.state.insertionWinner || this.state.selectionWinner || this.state.bubbleWinner ?
                    (<h1>Finished!</h1>)
                    :
                    (<></>)
                }
                <h2>This is your array</h2>
                {console.log()}
                <NumberBoxContainer
                    loser={this.state.humanLoser}
                    player='PLAYER'
                    cards={this.state.cards}
                    last_selected={this.state.last_selected}
                    selectCard={this.selectCard}
                    selected={this.state.humanWinner}
                />
                <br />
                <h2>This is Insertion Sort</h2>
                <NumberBoxContainer
                    loser={this.state.insertionLoser}
                    player='BOT'
                    cards={this.state.insertion_cards}
                    selected={this.state.insertionWinner}
                    loser={this.state.insertionLoser}
                />
                <br />
                <h2>This is Bubble Sort</h2>
                <NumberBoxContainer
                    loser={this.state.bubbleLoser}
                    player='BOT'
                    cards={this.state.bubble_cards}
                    selected={this.state.bubbleWinner}
                    loser={this.state.bubbleLoser}
                />
                <h2>This is Selection Sort</h2>
                <NumberBoxContainer
                    loser={this.state.selectionLoser}
                    player='BOT'
                    cards={this.state.selection_cards}
                    selected={this.state.selectionWinner}
                    loser={this.state.selectionLoser}
                />
            </main>
        )
    }

    selectCard(index) {
        let human, insertion, selection, bubble;
        let previous = this.state.last_selected;
        if (previous === null) {
            this.setState({
                last_selected: index,
            })
        } else {
            this.swap(previous, index);

            this.setState({
                last_selected: null,
            })

            if (index != previous) {
                this.setState({
                    insertion_cards: this.state.insertion.step(),
                    bubble_cards: this.state.bubble.step(),
                    selection_cards: this.state.selection.step()
                })
            }
        }

        human = this.checkOrder(this.state.cards);
        insertion = this.checkOrder(this.state.insertion_cards);
        bubble = this.checkOrder(this.state.bubble_cards);
        selection = this.checkOrder(this.state.selection_cards);

        if (human) {
            console.log('human')
            this.setState({
                insertionLoser: true,
                selectionLoser: true,
                bubbleLoser: true,
                humanWinner: true,
                Text: 'YOU'
            })
        }
        if (insertion) {
            this.setState({
                humanLoser: true,
                selectionLoser: true,
                bubbleLoser: true,
                insertionWinner: true,
                Text: 'Insertion Sort'
            })
        }
        if (bubble) {
            this.setState({
                humanLoser: true,
                selectionLoser: true,
                bubbleWinner: true,
                insertionLoser: true,
                Text: 'Bubble Sort'
            })
        }
        if (selection) {
            this.setState({
                humanLoser: true,
                selectionWinner: true,
                bubbleLoser: true,
                insertionLoser: true,
                Text: 'Selection Sort'
            })
        }

    }

    swap(i, j) {
        let arr = this.state.cards;
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;

        this.setState({
            cards: arr,
        })
    }

    checkOrder(array) {
        let arr = array;
        let prev = arr[0];
        let i = 0;
        let result = false;

        for (; i < arr.length && prev <= arr[i]; i++) {
            prev = arr[i];
        }

        if (i == arr.length) {
            result = true;
        }
        console.log(result);
        return result;
    }
}

export default Game;