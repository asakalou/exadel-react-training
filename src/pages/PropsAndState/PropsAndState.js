import React, {Component} from 'react';

/**
 * State and lifecycle at https://reactjs.org/docs/state-and-lifecycle.html
 * Components and Props at https://reactjs.org/docs/components-and-props.html
 *
 */


const Formatter1 = (props) => <span>Formatted 1: {props.value}</span>;

class Formatter extends Component {

    render() {
        return <span>Formatted: {this.props.value}</span>
    }
}

class PropsAndState extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'Default Value'
        }
    }

    render() {
        return (
            <div>
                <h1>Props and State</h1>
                <hr/>

                <div>
                    This is a value from state: {this.state.value}
                </div>

                <div>
                    This is a value from props in Formatter1: <Formatter1 value="Hello World"/>
                </div>

                <div>
                    This is a value from props in Formatter: <Formatter value="Hello World"/>
                </div>
            </div>
        );
    }

}

export default PropsAndState;