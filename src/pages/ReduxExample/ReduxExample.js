import React, {Component} from 'react';
import BasicExample from "./BasicExample";

class ReactExample extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>Redux</h1>
                <hr/>
                <BasicExample/>

            </div>
        );
    }

}

export default ReactExample;