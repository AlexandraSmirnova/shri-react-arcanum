import React, { Component } from 'react';
import NavDescription from '../../NavDescription';
import Breadcrumbs from '../../../containers/Breadcrumbs';
import RepositoryTable from '../../../containers/RepositoryTable';

import './styles.scss';


class Main extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs />
                <NavDescription />
                <RepositoryTable />
            </div>
        );
    }
}

export default Main;