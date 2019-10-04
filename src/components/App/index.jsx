import React, { Component } from 'react';
import './styles.scss';
import Header from '../Header';
import Footer from '../Footer';
import NavDescription from '../NavDescription';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-Content">
                    <NavDescription />
                </div>
                <Footer /> 
            </div>
        );
    }
}

export default App;