import React, {Component, Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

let componentCounter = 0;

const Card = ({first, last}) => {
    return (
        <Fragment>
            <div className="person-card">
                <div>First Name: {first}</div>
                <div>Last Name: {last}</div>
            </div>
            <hr/>
        </Fragment>
    );
};


const propTypes = {
    person: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired
    })
};

class SimpleCardComponent extends Component {

    constructor(props) {
        super(props);
        this.id = `Simple - ${++componentCounter}`;
    }

    componentWillReceiveProps() {
        console.log(`${this.id} - willReceiveProps`);
    }

    componentWillUpdate() {
        console.log(`${this.id} - willUpdate`);
    }

    componentDidUpdate() {
        console.log(`${this.id} - didUpdate`);
    }

    render() {
        return <Card {...this.props.person}/>;
    }
}

SimpleCardComponent.propTypes = propTypes;


class PureCardComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.id = `Pure - ${++componentCounter}`;
    }

    componentWillReceiveProps() {
        console.log(`${this.id} - willReceiveProps`);
    }

    componentWillUpdate() {
        console.log(`${this.id} - willUpdate`);
    }

    componentDidUpdate() {
        console.log(`${this.id} - didUpdate`);
    }

    render() {
        return <Card {...this.props.person}/>;
    }
}

PureCardComponent.propTypes = propTypes;


class PurePure extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: []
        };

        this.addRandomPerson = this.addRandomPerson.bind(this);
    }

    addRandomPerson() {
        const id = `${new Date().getTime()}`;
        this.setState((prevState, props) => ({
            persons: prevState.persons.concat([{id, first: id, last: id}])
        }));
    }


    render() {
        return (
            <div>
                <button type="button" onClick={this.addRandomPerson}>Add Random Person</button>

                <div>
                    <b>Simple Components</b>
                    <ul>
                        {
                            this.state.persons.map(person => {
                                return <SimpleCardComponent key={person.id} person={person}/>
                            })
                        }
                    </ul>
                </div>

                <br/>
                <br/>
                <br/>

                <div>
                    <b>Pure Components</b>
                    <ul>
                        {
                            this.state.persons.map(person => {
                                return <PureCardComponent key={person.id} person={person}/>
                            })
                        }
                    </ul>
                </div>


            </div>
        );
    }

}

export default PurePure;