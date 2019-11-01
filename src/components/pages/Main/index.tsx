import * as React from 'react';
import { connect } from 'react-redux';
import NavDescription from '../../../containers/NavDescription';
import Breadcrumbs from '../../../containers/Breadcrumbs';
import RepositoryTable from '../../../containers/RepositoryTable';
import Error from '../../__supportComponents/Error';
import { match as matchType } from 'react-router';
import { State } from '../../../client/store/types';


interface Props {
    repo: string;
    match: matchType<{ path: string }>;
}

class Main extends React.Component<Props> {
    public render() {
        const { match, repo } = this.props;

        if (!repo) {
            return <Error title="404" message="Репозиторий не найден" />;
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

const mapStateToProps = (state: State) => ({
    repo: state.repositories.current,
});

export default connect(mapStateToProps)(Main);
