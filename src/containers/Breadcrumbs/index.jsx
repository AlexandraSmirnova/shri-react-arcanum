import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { setDirectoryContentThunk } from '../../client/store/thunks';

import './styles.scss';


const getPathArray = (pathString) => pathString
    .split('/')
    .filter((item) => item);

class Breadcrumbs extends Component {
    state = {
        items: this.props.path,
    }

    componentWillReceiveProps(newProps) {
        if (newProps.path !== this.props.path) {
            this.setState({ items: newProps.path });
        }
    }

    handleBreadcrumbClick = (pathToItem) => () => {
        const { onСhangePath, path } = this.props;

        if (pathToItem !== path) {
            onСhangePath(pathToItem);
        }
    }

    getBreadcrumb = (item, index) => {
        const { items } = this.state;
        const pathToItem = index !== '-1' ? items.slice(0, index + 1).join('/') : '';
        
        return (
            <RouterLink
                to={pathToItem ? `/tree/${pathToItem}` : '/'}
                className="Breadcrumbs-Item"
                key={item}
                onClick={this.handleBreadcrumbClick(pathToItem)}
            >
                {item}
            </RouterLink>
        );
    }

    render() {
        const { current } = this.props;
        const { items } = this.state;

        return (
            <div className="Breadcrumbs">
                {this.getBreadcrumb(current, -1)}
                {items.map(this.getBreadcrumb)}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    path: getPathArray(state.directory.path),
    current: state.repositories.current
});

const mapDispatchToProps = (dispatch) => ({
    onСhangePath: (path) =>
        dispatch(setDirectoryContentThunk(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);