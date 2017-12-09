import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import Portals from "./pages/Portals";
import PropAndTypes from "./pages/PropAndTypes";
import Forms from "./pages/Forms";
import Refs from "./pages/Refs";
import PropsAndState from "./pages/PropsAndState";
import ComponentLifecycle from "./pages/ComponentLifecycle";
import PurePure from "./pages/PurePure";
import Fragments from "./pages/Fragments";
import AjaxGif from "./pages/AjaxGif";


const NotImplemented = () => <div>Not Implemented</div>;

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
                            <li><Link to="/refs">Refs</Link></li>
                            <li><Link to="/forms">Forms</Link></li>
                            <li><Link to="/portals">Portals</Link></li>
                            <li><Link to="/fragments">Fragments</Link></li>
                            <li><Link to="/Ajax">Ajax</Link></li>
                        </ol>

                        <hr/>

                        <Route path="/props-state" component={PropsAndState}/>
                        <Route path="/prop-types" component={PropAndTypes}/>
                        <Route path="/component-lifecycle" component={ComponentLifecycle}/>
                        <Route path="/pure-components" component={PurePure}/>
                        <Route path="/portals" component={Portals}/>
                        <Route path="/forms" component={Forms}/>
                        <Route path="/refs" component={Refs}/>
                        <Route path="/fragments" component={Fragments}/>
                        <Route path="/ajax" component={AjaxGif}/>
                    </div>
                </Router>

            </div>
        );
    }
}


export default App;
