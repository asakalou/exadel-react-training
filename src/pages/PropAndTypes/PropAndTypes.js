import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * As your app grows, you can catch a lot of bugs with typechecking.
 * For some applications, you can use JavaScript extensions like Flow or
 * TypeScript to typecheck your whole application.
 * But even if you don’t use those, React has some built-in typechecking abilities.
 * To run typechecking on the props for a component, you can assign the special propTypes property.
 *
 *
 * PropTypes documentation at https://reactjs.org/docs/typechecking-with-proptypes.html
 */

const propTypes = {
    value: PropTypes.string.isRequired,
    anotherValue: PropTypes.element.isRequired
};

class Formatter extends Component {

    render() {
        return (
            <div>
                <span>{this.props.value}</span>
                {this.props.anotherValue}
            </div>
        );
    }

}
Formatter.propTypes = propTypes;


class PropAndTypes extends Component {

    render() {
        return (
            <div>
                <h1>PropTypes</h1>

                {/* This works fine.*/}
                <div>String: <Formatter value="string" anotherValue={<span>!!!</span>}/></div>/div>

                <br/>

                {/* This one should fail. Check the console.*/}
                <div>Number: <Formatter value={1}/></div>


                <div><Formatter value={'234'} anotherValue={<div>Another</div>}/></div>
            </div>
        );
    }
}


export default PropAndTypes;