import React, {Component} from 'react';

class Forms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            controlledName: '',
            uncontrolledName: ''
        };

        this.handleControlledNameChange = this.handleControlledNameChange.bind(this);
        this.onUncontrolledSubmit = this.onUncontrolledSubmit.bind(this);
    }

    handleControlledNameChange(event) {
        this.setState({
            controlledName: event.target.value
        });
    }

    onUncontrolledSubmit(event) {
        event.preventDefault();
        this.setState({
            uncontrolledName: this.uncontrolledInput.value
        });
    }


    render() {
        return (
            <div>
                <h1>Forms</h1>
                <hr/>
                <div>
                    <h2>Uncontrolled</h2>
                    <form onSubmit={this.onUncontrolledSubmit}>
                        <input type="text"
                               ref={(input) => {
                                   this.uncontrolledInput = input;
                               }}
                               defaultValue="Initial Value"/>
                        <div>{this.state.uncontrolledName}</div>
                    </form>


                    <h2>Controlled</h2>
                    <form>
                        <input type="text"
                               value={this.state.controlledName} onChange={this.handleControlledNameChange}/>
                        <div>{this.state.controlledName}</div>
                    </form>
                </div>

            </div>
        );
    }

}

export default Forms;