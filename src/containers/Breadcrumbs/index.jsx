import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';


class Breadcrumbs extends Component {
    getBreadcrumb = (item) => {
        return (
            <div className="Breadcrumbs-Item" key={item}>
                {item}    
            </div>
        );
    }

    render() {
        const { path, current } = this.props;
        const items = path
            .split('/')
            .filter((item) => item);

        return (
            <div className="Breadcrumbs">
                {this.getBreadcrumb(current)}
                {items.map(this.getBreadcrumb)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    path: state.directory.path,
    current: state.repositories.current
});

export default connect(mapStateToProps)(Breadcrumbs);