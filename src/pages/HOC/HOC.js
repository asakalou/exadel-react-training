import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {

    render() {
        const {mouseX, mouseY} = this.props;

        return (
            <div>My Mouse props: {`x: ${mouseX}, y: ${mouseY}`}</div>
        );
    }

}

MyComponent.propTypes = {
    mouseX: PropTypes.number,
    mouseY: PropTypes.number
};

class YourComponent extends Component {

    render() {
        const {mouseX, mouseY} = this.props;

        return (
            <div>Your Mouse props: {`x: ${mouseX}, y: ${mouseY}`}</div>
        );
    }

}

YourComponent.propTypes = {
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

const MyWrappedComponent = withHOC(MyComponent);
const YourWrappedComponent = withHOC(YourComponent);


// render props

class MouseProps extends Component {

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
                {this.props.children(this.state)}
            </div>

        );
    }
}

class MousePropsUsageExample extends Component {
    render() {
        return (
            <MouseProps>
                {({x, y}) => {
                    return <div>{`x: ${x}, y: ${y}`}</div>
                }}
            </MouseProps>
        );
    }
}

class HOC extends Component {

    render() {
        return (
            <div>
                <h1>HOC</h1>
                <hr/>

                <MyWrappedComponent/>
                <hr/>
                <YourWrappedComponent/>

                <MousePropsUsageExample/>

            </div>
        );
    }

}


export default HOC;