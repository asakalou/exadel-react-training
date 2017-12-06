import React, {Component, Fragment} from 'react';

/**
 * Fragments look like empty JSX tags.
 * They let you group a list of children without adding extra nodes to the DOM.
 *
 * Fragments at https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
 */
class Fragments extends Component {

    anotherFragment() {
        return (
            <Fragment>
                <span>Another</span>
                <span>Fragment</span>
            </Fragment>
        )
    }

    render() {
        return (
            <div>
                <h1>Fragments</h1>
                <hr/>

                {this.anotherFragment()}

                <div>
                    <div key={1}>#01</div>
                    <div key={2}>#02</div>
                    <div key={3}>#03</div>
                </div>

                {/*should have keys*/}
                {[
                    <div key={1}>#1</div>,
                    <div key={2}>#2</div>,
                    <div key={3}>#3</div>
                ]}

                {/*do not require keys*/}
                <Fragment>
                    <div># 1.1</div>
                    <div># 1.2</div>
                    <div># 1.3</div>
                </Fragment>
            </div>
        )
    }

}

export default Fragments;