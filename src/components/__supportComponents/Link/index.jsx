import React, { Component } from 'react';
import './styles.scss';

class Link extends Component {
    render() {
        const { children, linkHref } = this.props;
        return (
            <a className="Link" href={linkHref}>
                {children}
            </a>
        );
    }
}

export default Link;