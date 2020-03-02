import React from 'react';
import './CharComponent.css';

class CharComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="CharComponent">
                <p onClick={this.props.click}> {this.props.caracter}</p>
            </div >
        )

    }
};

export default CharComponent;