import React from 'react'
import Number_Box from '../number_box/Number_Box'

class NumberBoxContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.selected);
        if (Array.isArray(this.props.cards)) {
            return (
                <div>
                    {this.props.cards.map((card, index) => {
                        let selected = false;
                        if (this.props.player === 'PLAYER') {
                            if (index == this.props.last_selected) {
                                selected = true;
                            }

                            return (
                                <div
                                    className='card'
                                    onClick={() => this.props.selectCard(index)}
                                    key={'cont-' + index}
                                >
                                    <Number_Box
                                        number={card}
                                        is_open={true}
                                        index={index}
                                        key={index}
                                        selected={selected || this.props.selected}
                                        loser={this.props.loser}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className='card'
                                    key={'cont-' + index}
                                >
                                    <Number_Box
                                        number={card}
                                        is_open={true}
                                        index={index}
                                        key={index}
                                        selected={selected || this.props.selected}
                                        loser={this.props.loser}
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
            )
        } else {
            return (<></>)
        }
    }
}

export default NumberBoxContainer;