import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";

import Portals from "./pages/Portals";
import PropAndTypes from "./pages/PropAndTypes";
import Forms from "./pages/Forms";
import Refs from "./pages/Refs";
import PropsAndState from "./pages/PropsAndState";
import ComponentLifecycle from "./pages/ComponentLifecycle";
import PurePure from "./pages/PurePure";
import Fragments from "./pages/Fragments";
import AjaxGif from "./pages/AjaxGif";
import ReduxExample from "./pages/ReduxExample";
import ImmutableData from "./pages/ImmutableData";
import List from "./pages/List";
import Routing from "./pages/Routing";
import AppContextPage from "./pages/Context";
import HOC from "./pages/HOC";


class App extends Component {


    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <ol>
                            <li><Link to="/props-state">Props & State</Link></li>
                            <li><Link to="/prop-types">PropTypes</Link></li>
                            <li><Link to="/component-lifecycle">Component Life Cycle</Link></li>
                            <li><Link to="/pure-components">Pure Components</Link></li>
                            <li><Link to="/lists">Lists & Keys</Link></li>
                            <li><Link to="/refs">Refs</Link></li>
                            <li><Link to="/forms">Forms</Link></li>
                            <li><Link to="/portals">Portals</Link></li>
                            <li><Link to="/fragments">Fragments</Link></li>
                            <li><Link to="/Ajax">Ajax</Link></li>
                            <li><Link to="/redux">Redux</Link></li>
                            <li><Link to="/immutable-data">Immutable Data</Link></li>
                            <li><Link to="/routing">Routing</Link></li>
                            <li><Link to="/context">Context</Link></li>
                            <li><Link to="/hoc">HOC</Link></li>
                        </ol>

                        <hr/>

                        <Route path="/props-state" component={PropsAndState}/>
                        <Route path="/prop-types" component={PropAndTypes}/>
                        <Route path="/component-lifecycle" component={ComponentLifecycle}/>
                        <Route path="/pure-components" component={PurePure}/>
                        <Route path="/lists" component={List}/>
                        <Route path="/portals" component={Portals}/>
                        <Route path="/forms" component={Forms}/>
                        <Route path="/refs" component={Refs}/>
                        <Route path="/fragments" component={Fragments}/>
                        <Route path="/ajax" component={AjaxGif}/>
                        <Route path="/redux" component={ReduxExample}/>
                        <Route path="/immutable-data" component={ImmutableData}/>
                        <Route path="/routing" component={Routing}/>
                        <Route path="/context" component={AppContextPage}/>
                        <Route path="/hoc" component={HOC}/>
                    </div>
                </Router>

            </div>
        );
    }
}


export default App;
