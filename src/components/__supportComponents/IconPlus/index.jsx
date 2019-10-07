import React, { Component } from 'react';
import * as classnames from 'classnames';
import './styles';

class IconPlus extends Component {
    render() {
        const { className, icon, iconMod, children, onClick, right } = this.props;
        const ch = classnames(
            'IconPlus',
            right && 'IconPlus_i-position_right',
            className,
        );
        const iconCh = classnames(
            'IconPlus-Icon',
            iconMod
        )

        return (
            <div className={ch} onClick={onClick}>
                {children}
                <div className={iconCh}>
                    {icon}
                </div>
            </div>
        );
    }
}

IconPlus.defaultProps = {
    iconMod: "IconPlus-Icon_indent-l_s" 
}

export default IconPlus;