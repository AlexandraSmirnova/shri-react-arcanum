import React, { Component } from 'react';
import './styles.scss';

class Error extends Component {
    render() {
        const { title, message } = this.props;

        return (
            <div className="Error">
                <div className="Error-Title">{title}</div>
                <div className="Error-Message">{message}</div>
            </div>
        );
    }
}

export default Error;