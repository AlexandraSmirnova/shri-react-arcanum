import * as React from 'react';
import { connect } from 'react-redux';
import Tab from '../../components/__supportComponents/Tab';
import Dropdown from '../../components/__supportComponents/Dropdown';
import { setCurrentRepositoryThunk } from '../../client/store/thunks';
import { State, ThunkDispatchWrap } from '../../client/store/types';

import './styles.scss';


interface Props {
    current: string;
    repositories: string[];
    onRepositorySelect: (item: string) => void;
};

class RepositoryToggle extends React.Component<Props> {
    renderListItem = (item: string) => (
        <div
            className="RepositoryToggle-Item"
            onClick={() => this.props.onRepositorySelect(item)}
            key={item}
        >
            {item}
        </div>
    )

    render() {
        const { repositories, current } = this.props;

        if (!current) {
            return null;
        }

        const button = (
            <Tab className="RepositoryToggle-Button">
                Repository {current}
            </Tab>
        );

        const list = repositories
            .filter((r) => r !== current)
            .map(this.renderListItem);

        return (
            <Dropdown
                className="RepositoryToggle"
                buttonItem={button}
            >
                {list}
            </Dropdown>
        );
    }
}

const mapStateToProps = (state: State) => ({
    repositories: state.repositories.all,
    current: state.repositories.current,
})

const mapDispatchToProps = (dispatch: ThunkDispatchWrap) => ({
    onRepositorySelect: (item: string) => {
        dispatch(setCurrentRepositoryThunk(item));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryToggle);
