import React, {Component} from 'react';

const numbers = [1, 2, 3, 4, 5];

class List extends Component {

    render() {
        return (
            <div>
                <h1>Lists and Keys</h1>
                <hr/>

                <ul>
                    {numbers.map(n =>
                        <li key={n}>{n}</li>
                    )}
                </ul>

            </div>
        )
    }

}

export default List;