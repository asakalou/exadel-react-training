import React, {Component} from 'react';


class Formatter extends Component {
    constructor(props) {
        super(props);
    }

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
                    This is a value from props: <Formatter value="Hello World"/>
                </div>
            </div>
        );
    }

}

export default PropsAndState;