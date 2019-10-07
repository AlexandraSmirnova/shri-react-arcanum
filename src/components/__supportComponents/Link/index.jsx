import React, { Component } from 'react';
import './styles.scss';

class Link extends Component {
    render() {
        const { children, linkHref, onClick } = this.props;

        if (linkHref) {
            return (
                <a className="Link" href={linkHref}>
                    {children}
                </a>
            ); 
        }

        return (
            <div className="Link" onClick={onClick}>
                {children}
            </div>
        );
    }
}

export default Link;