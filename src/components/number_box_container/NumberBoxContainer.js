import React from 'react'
import Number_Box from '../number_box/Number_Box'

class NumberBoxContainer extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.cards.map((card, index) => {
                    let selected = false;
                    
                    if (index == this.props.last_selected) {
                        selected = true;
                    }

                    if (this.props.player === 'PLAYER') {
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
                                    selected={selected}
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
                                    selected={selected}
                                />
                            </div>
                        )
                    }

                    
                })}  
            </div>
        )
    }
}

export default NumberBoxContainer;