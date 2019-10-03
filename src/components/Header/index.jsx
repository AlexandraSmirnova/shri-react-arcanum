import React, { Component } from 'react';
import Logo from 'static/svg/logo.svg';
import Icon from '../__supportComponents/Icon';
import './styles.scss';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Icon className="Header-Logo">
                    <Logo />
                </Icon>
            </div>
        );
    }
}

export default Header;