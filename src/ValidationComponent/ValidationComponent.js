import React from 'react';

class ValidationComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.long < 5) {
            return (
                <div>
                    <p>Texto demasiado corto</p>
                </div >
            )
        }
        else{
            return (
                <div>
                    <p>Texto suficientemente largo</p>
                </div >
            )
        }
    }
};

export default ValidationComponent;