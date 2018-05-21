import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {

    render() {
        const {mouseX, mouseY} = this.props;

        return (
            <div>Mouse props: {`x: ${mouseX}, y: ${mouseY}`}</div>
        );
    }

}

MyComponent.propTypes = {
    mouseX: PropTypes.number,
    mouseY: PropTypes.number
};

const withHOC = (Comp) => {

    return class extends Component {

        constructor() {
            super();

            this.state = {
                x: 0,
                y: 0
            };
        }

        handleMouseMove = (event) => {
            this.setState({
                x: event.screenX,
                y: event.screenY
            });
        }

        render() {
            return (
                <div onMouseMove={this.handleMouseMove}>
                    <Comp mouseX={this.state.x} mouseY={this.state.y}/>
                </div>
            );
        }

    }
};

const WrappedComponent = withHOC(MyComponent);


class HOC extends Component {

    render() {
        return (
            <div>
                <h1>HOC</h1>
                <hr/>

                <WrappedComponent/>

            </div>
        );
    }

}

export default HOC;