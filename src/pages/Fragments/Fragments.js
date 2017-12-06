import React, {Component, Fragment} from 'react';

class Fragments extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>Fragments</h1>
                <hr/>

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