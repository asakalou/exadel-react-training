import React, {Component} from 'react';

const AppContext = React.createContext({
    user: {
        name: 'Alex 1'
    }
});


const UserPanel = () => {
    return (
        <AppContext.Consumer>
            {conf => <div>{conf.user.name}</div>}
        </AppContext.Consumer>
    );
};

class AppContextPage extends Component {

    constructor() {
        super();

        this.state = {
            user: {name: 'Alex'}
        };
    }

    switchUser = () => {
        this.setState((prevState, props) => {
            return {
                ...prevState,
                user: {
                    name: `Alex ${Date.now().toString()}`
                }
            }
        });
    }

    render() {

        return (
            <div>
                <h1>Context</h1>
                <hr/>

                <AppContext.Provider value={this.state}>

                    <UserPanel/>

                    <hr/>

                    <UserPanel/>
                </AppContext.Provider>

                <button onClick={this.switchUser}>Switch User</button>

            </div>
        )

    }

}

export default AppContextPage;