import React, { Component } from 'react';
import * as classnames from 'classnames';
import './styles';

class Icon extends Component {
    render() {
        const { children, className } = this.props;
        const ch = classnames("Icon", className);
        
        return (
            <div className={ch}>
                {children}
            </div>
        );
    }
}

export default Icon;