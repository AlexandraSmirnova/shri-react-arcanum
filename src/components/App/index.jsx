import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import Main from '../pages/Main';
import Branches from '../pages/Branches';
import Commit from '../pages/Commit';
import File from '../pages/File';
import './styles.scss';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-Content">

                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route path="/branches">
                            <Branches />
                        </Route>
                        <Route path="/commit">
                            <Commit />
                        </Route>
                        <Route path="/file/:name">
                            <File />
                        </Route>
                        <Route path="/history">
                            <History />
                        </Route>
                    </Switch>

                </div>
                <Footer />
            </div>
        );
    }
}

export default App;