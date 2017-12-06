import React, {Component} from 'react';

class Refs extends Component {

    constructor(props) {
        super(props);

        this.setFocus = this.setFocus.bind(this);
    }

    setFocus() {
        this.inputEl.focus();
    }

    render() {
        return (
            <div>
                <h1>Refs</h1>
                <hr/>

                <form>
                    <input type="text"
                           ref={(input) => {
                               this.inputEl = input;
                               this.inputEl.focus();
                           }}
                           defaultValue="Initial Value"/>
                    <button type="button" onClick={this.setFocus}>Set focus</button>
                </form>

            </div>
        );
    }

}

export default Refs;