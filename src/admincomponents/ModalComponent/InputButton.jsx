import React from 'react';

class InputButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputs: []
        }
    }

    addInput = ev => {
        this.setState(prev => ({ inputs: [...prev.inputs, 'Hi'] }))
    }

    render() {
        return (
            <div>
                <button onClick={this.addInput}>Add input</button>
                {this.state.inputs.map(node => <input type="text"/>)}
            </div>
        )
    }
}

export default InputButton;