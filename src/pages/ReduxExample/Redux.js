console.log('1')

const createStore = (reducer) => {

    let state;

    let listeners = [];


    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    };

    const subscribe = (listener) => {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    const getState = () => state;

    return {
        dispatch,
        subscribe,
        getState
    }
};

const store = createStore((state = {counter: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                counter: ++state.counter
            }
        }

        case 'DECREMENT': {
            return {
                ...state,
                counter: --state.counter
            }
        }

        default: {
            return state;
        }

    }
});

export {store};
