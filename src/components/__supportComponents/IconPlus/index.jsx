import React, { Component } from 'react';
import * as classnames from 'classnames';
import './styles';

class IconPlus extends Component {
    render() {
        const { className, icon, children, onClick } = this.props;
        const ch = classnames(
            'IconPlus',
            className,
        );

        return (
            <div className={ch} onClick={onClick}>
                {children}
                <div className="IconPlus-Icon IconPlus-Icon_indent-l_s">
                    {icon}
                </div>
            </div>
        );
    }
}

export default IconPlus;