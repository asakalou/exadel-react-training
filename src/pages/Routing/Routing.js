import React, {Component} from 'react';
import {Link, Route, withRouter} from "react-router-dom";

const LinkButton = withRouter(({match, location, history, to, children}) => {
    const onClick = (event) => {history.push(to)};
    const isActive = location.pathname === to;
    return (
        <button className={isActive ? 'active' : null} onClick={onClick}>{children}</button>
    );
});


class Routing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subs: []
        }
    }

    handleAddSub = () => {
        this.setState((prevState, props) => {
            const index = prevState.subs.length + 1;
            const sub = {
                path: `sub/${index}`,
                title: `Sub ${prevState.subs.length + 1}`,
                content: <div>{index}</div>
            };

            return {
                ...prevState,
                subs: [...prevState.subs, sub]
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Routing</h1>
                <hr/>

                <button onClick={this.handleAddSub}>Add Sub Route</button>

                {this.state.subs.map(sub => {
                    return <Link to={`${this.props.match.url}/${sub.path}`}>{sub.title}</Link>
                })}


                {this.state.subs.map(sub => {
                    return <Route path={`${this.props.match.url}/${sub.path}`} render={() => sub.content}/>
                })}

                <hr/>

                <LinkButton to={`${this.props.match.url}/pretty-btn-url`}>
                    Pretty Button
                </LinkButton>

                <Route path={`${this.props.match.url}/pretty-btn-url`}
                       render={() => 'Pretty content'}
                />

            </div>
        );
    }

}

export default Routing;