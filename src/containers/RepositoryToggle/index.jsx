import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tab from '../../components/__supportComponents/Tab';
import Dropdown from '../../components/__supportComponents/Dropdown';
import './styles.scss';
import { setCurrentRepositoryThunk } from '../../client/store/thunks';


class RepositoryToggle extends Component {
    renderListItem = (item) => (
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

const mapStateToProps = (state) => ({
    repositories: state.repositories.all,
    current: state.repositories.current,
})

const mapDispatchToProps = (dispatch) => ({
    onRepositorySelect: (item) => {
        dispatch(setCurrentRepositoryThunk(item));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryToggle);
