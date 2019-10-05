import React, { Component } from 'react';
import NavDescription from '../../NavDescription';
import { Link } from "react-router-dom";
import './styles.scss';

class Main extends Component {
    render() {
        return (
            <div>
                <NavDescription />
                <Link to="/file">file</Link>
            </div>
        );
    }
}

export default Main;