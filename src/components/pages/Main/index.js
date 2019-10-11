import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavDescription from '../../../containers/NavDescription';
import Breadcrumbs from '../../../containers/Breadcrumbs';
import RepositoryTable from '../../../containers/RepositoryTable';
import Error from '../../__supportComponents/Error';

class Main extends Component {
    render() {
        const { match, repo } = this.props;

        if (!repo) {
            return <Error title='404' message="Репозиторий не найден" />;
        }

        return (
            <div>
                <Breadcrumbs />
                <NavDescription />
                <RepositoryTable contentPath={match.params.path} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    repo: state.repositories.current
});

export default connect(mapStateToProps)(Main);