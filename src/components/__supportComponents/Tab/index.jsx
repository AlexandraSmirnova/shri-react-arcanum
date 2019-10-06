import React, { Component } from 'react';
import * as classnames from 'classnames';
import './styles.scss';

class Tab extends Component {
    render() {
        const { className, children } = this.props;
        const ch = classnames(
            'Tab',
            className,
        );

        return (
            <div className={ch}>
                {children}
            </div>
        );
    }
}

export default Tab;