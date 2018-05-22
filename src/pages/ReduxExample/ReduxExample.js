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

const MyComponent = withRedux(({...props}) => {
   return (
       <div>{props.counter}</div>
   )
});


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