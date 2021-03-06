import React, {Component} from 'react';
import BasicExample from "./BasicExample";

import {store} from './Redux';

setInterval(() => {
    store.dispatch({type: 'INCREMENT'});
}, 1000);

const withRedux = (Comp) => {
    return class ReduxComponent extends Component {

        constructor() {
            super();
            this.state = {};
        }

        componentDidMount() {
            this.unsubscribe = store.subscribe(() => {
                this.setState({
                    counter: store.getState().counter
                })
            });
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            return (
                <Comp {...this.state}/>
            )
        }
    }
};

class MyComponent extends Component {
    render() {
        return (
            <div>{this.props.counter}</div>
        );
    }
}

class MyComponent2 extends Component {
    render() {
        return (
            <div>{this.props.counter}</div>
        );
    }
}

const MyContainerComponent = withRedux(MyComponent);
const MyContainerComponent2 = withRedux(MyComponent2);


class ReactExample extends Component {

    render() {
        return (
            <div>
                <h1>Redux</h1>
                <hr/>
                {/*<BasicExample/>*/}

                Counter: <MyComponent/>
                Counter: <MyComponent/>
                Counter: <MyComponent/>
            </div>
        );
    }

}

export default ReactExample;