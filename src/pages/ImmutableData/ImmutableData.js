import React, {Component} from 'react';
import update from 'immutability-helper';


const state1 = {
    movies: [
        {title: 'The Rock'}
    ]
};

const state2 = update(state1, {
        movies: {
            $push: [{title: 'Gone in 60 seconds'}]
        }
    }
);

console.log(state1, state2, state1 === state2);

class ImmutableData extends Component {

    render() {
        return (
            <div>
                <h1>Immutable Data</h1>
                <hr/>
            </div>
        )
    }

}

export default ImmutableData;