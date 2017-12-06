import React, {Component} from 'react';

class Refs extends Component {

    constructor(props) {
        super(props);

        this.setFocus = this.setFocus.bind(this);
    }

    setFocus() {
        this.inputEl.focus();
    }

    componentDidMount() {
        console.log(this.inputEl);
    }

    render() {
        return (
            <div>
                <h1>Refs</h1>
                <hr/>

                <form>
                    <button type="button" onClick={
                        () => {
                            this.inputEl.value = new Date().getTime();
                        }
                    }>Click</button>
                    <input type="text"
                           ref={(input) => {
                               this.inputEl = input;

                               // React will call the ref callback with the DOM element
                               // when the component mounts, and call it with null when it unmounts.
                               // ref callbacks are invoked before componentDidMount
                               // or componentDidUpdate lifecycle hooks.
                               // Check at https://reactjs.org/docs/refs-and-the-dom.html
                               if (this.inputEl) {
                                   this.inputEl.focus();
                               }
                           }}
                           defaultValue="Initial Value"/>
                    <button type="button" onClick={this.setFocus}>Set focus</button>
                </form>

            </div>
        );
    }

}

export default Refs;