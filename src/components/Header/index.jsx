import React, { Component } from 'react';
import Logo from 'static/svg/logo.svg';
import Icon from '../__supportComponents/Icon';
import RepositoryToggle from '../../containers/RepositoryToggle';
import './styles.scss';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Icon className="Header-Logo">
                    <Logo />
                </Icon>
                <RepositoryToggle />
            </div>
        );
    }
}

export default Header;