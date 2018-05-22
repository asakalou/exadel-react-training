import React, {Component} from 'react';

const AppContext = React.createContext({
    user: {
        name: 'Alex 1'
    }
});


const UserPanel = () => {
    return (
        <AppContext.Consumer>
            {conf => {
                return (
                    <div>
                        <div>{conf.user.name} and age is {conf.user.age}</div>
                        <button
                            onClick={conf.setAge}>Set Age</button>
                    </div>
                );

            }}
        </AppContext.Consumer>
    );
};

class AppContextPage extends Component {

    constructor() {
        super();

        this.state = {
            user: {
                name: 'Alex'
            },
            setAge: () => {
                this.setState({
                    user: {
                        ...this.state.user,
                        age: Date.now()
                    }
                })
            }
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
                </AppContext.Provider>

                <UserPanel/>

                <button onClick={this.switchUser}>Switch User</button>

            </div>
        )

    }

}

export default AppContextPage;