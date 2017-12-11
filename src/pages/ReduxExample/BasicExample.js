import React, {Component} from 'react';

import {applyMiddleware, compose, createStore} from 'redux';


// actions
const INCREMENT = 'app/increment';
const DECREMENT = 'app/decrement';
const CHANGE_VALUE = 'app/change-value';

const increment = () => {
    return {type: INCREMENT}
};

const decrement = () => {
    return {type: DECREMENT}
};

const changeValue = (val) => {
    return {type: CHANGE_VALUE, val}
};

// default state
const defaultState = {
    currentValue: 0
};


// reducer
const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                currentValue: ++state.currentValue
            }
        }

        case DECREMENT: {
            return {
                ...state,
                currentValue: --state.currentValue
            }
        }

        case CHANGE_VALUE: {
            return {
                ...state,
                currentValue: action.val
            }
        }

        default: {
            return state;
        }
    }
};

const loggerMiddleware = store => next => action => {
    console.log(`[State] - dispatch`, action, store.getState());
    const result = next(action);
    console.log(`[State] - updated`, store.getState());
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    appReducer,
    composeEnhancers(
        applyMiddleware(
            loggerMiddleware
        )
    )
);


class BasicExample extends Component {

    constructor(props) {
        super(props);

        // subscribe to all store changes
        store.subscribe(() => {
            console.log('Change', store.getState());
        });

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleIncrement() {
        store.dispatch(increment());
    }

    handleDecrement() {
        store.dispatch(decrement());
    }

    handleChangeValue() {
        store.dispatch(changeValue(new Date().getTime()))
    }

    handleChangeCounterValue() {
        store.dispatch({
            type: 'app/change-counter-value',
            value: new Date().getTime()
        })
    }


    render() {
        return (
            <div>
                <h2>Basic</h2>

                <div>Check the console</div>
                <hr/>

                <div>
                    <button type="button" onClick={this.handleIncrement}>Increment</button>
                    <button type="button" onClick={this.handleDecrement}>Decrement</button>
                    <button type="button" onClick={this.handleChangeValue}>Change Value</button>
                </div>

            </div>
        );
    }

}

export default BasicExample;