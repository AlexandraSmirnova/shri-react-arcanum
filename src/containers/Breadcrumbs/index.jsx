import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { setDirectoryContentThunk } from '../../client/store/thunks';

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

    handleBreadcrumbClick = (index) => () => {
        const { onСhangePath, path } = this.props;
        const { items } = this.state;
        const pathToItem = items.slice(0, index + 1).join('/');

        if (pathToItem !== path) {
            onСhangePath(pathToItem);
        }
    }

    getBreadcrumb = (item, index) => {
        return (
            <div className="Breadcrumbs-Item" key={item} onClick={this.handleBreadcrumbClick(index)}>
                {item}    
            </div>
        );
    }

    render() {
        const { current } = this.props;
        const { items } = this.state;

        return (
            <div className="Breadcrumbs">
                {this.getBreadcrumb(current)}
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