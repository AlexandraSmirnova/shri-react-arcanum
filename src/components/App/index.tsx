import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import Main from '../pages/Main';
import File from '../pages/File';
import './styles.scss';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-Content">

                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/tree/:path([^/]*)" component={Main} />
                        <Route path="/file/:path([^/]*)" component={File} />
                    </Switch>

                </div>
                <Footer />
            </div>
        );
    }
}

export default App;