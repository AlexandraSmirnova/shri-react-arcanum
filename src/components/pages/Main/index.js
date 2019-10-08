import React, { Component } from 'react';
import NavDescription from '../../NavDescription';
import Breadcrumbs from '../../../containers/Breadcrumbs';
import RepositoryTable from '../../../containers/RepositoryTable';

class Main extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <Breadcrumbs />
                <NavDescription />
                <RepositoryTable contentPath={match.params.path} />
            </div>
        );
    }
}

export default Main;