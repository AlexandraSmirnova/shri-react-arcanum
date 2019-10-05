import React, { Component } from 'react';
import NavDescription from '../../NavDescription';
import Breadcrumbs from '../../../containers/Breadcrumbs';
import { Link } from "react-router-dom";

import './styles.scss';


class Main extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs />
                <NavDescription />
                <Link to="/file">file</Link>
            </div>
        );
    }
}

export default Main;