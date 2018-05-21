import React, {Component} from 'react';

const numbers = [1, 1];

class List extends Component {

    render() {
        const values = numbers.map(n =>
            <li key={n}>{n}</li>
        );

        const el = <div>sdfsd</div>;

        return (
            <div>
                <h1>Lists and Keys</h1>
                <hr/>

                <ul>
                    {
                        values.length >= 3 ? values : el
                    }
                </ul>

            </div>
        )
    }

}

export default List;