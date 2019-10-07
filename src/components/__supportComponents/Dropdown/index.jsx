import React, { Component } from 'react';
import * as classnames from 'classnames';
import Arrow from 'static/svg/arrow.svg';
import IconPlus from '../IconPlus';
import Icon from '../Icon';

import './styles.scss';


class Dropdown extends Component {
    state = {
        isOpened: false,
    }

    handleClick = () => {
        const { onClick } = this.props;

        if (onClick) {
            onClick();
        }

        this.setState({
            isOpened: !this.state.isOpened,
        })
    }

    render() {
        const { buttonItem, children, className } = this.props;
        const { isOpened } = this.state;

        const mainCh = classnames(
            'Dropdown',
            className
        );

        const blockCh = classnames(
            'Dropdown-Block',
            isOpened && 'Dropdown-Block_state_open',
        );

        const iconCh = classnames(
            isOpened && 'Icon_rotate_180'
        );

        return (
            <div className={mainCh}>
                <IconPlus
                    icon={<Icon className={iconCh}>{<Arrow />}</Icon>}
                    className="Dropdown-Button"
                    onClick={this.handleClick}
                >
                    {buttonItem}
                </IconPlus>
                <div className={blockCh}>
                    {children}
                </div>
            </div>
        );
    }
}

export default Dropdown;