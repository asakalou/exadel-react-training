import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    value: PropTypes.string.isRequired
};

class Formatter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <span>{this.props.value}</span>
    }

}
Formatter.propTypes = propTypes;


class PropAndTypes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>PropTypes</h1>

                // This works fine.
                <div>String: <Formatter value="string"/></div>

                <br/>

                // This one should fail. Check the console.
                <div>Number: <Formatter value={12}/></div>
            </div>
        );
    }
}


export default PropAndTypes;