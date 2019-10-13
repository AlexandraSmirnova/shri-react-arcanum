import * as React from 'react';
import Logo from 'static/svg/logo.svg';
import Icon from '../__supportComponents/Icon';
import RepositoryToggle from '../../containers/RepositoryToggle';
import './styles.scss';
import { Link as RouterLink } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <RouterLink to='/'>
                    <Icon className="Header-Logo">
                        <Logo />
                    </Icon>
                </RouterLink>
                <RepositoryToggle />
            </div>
        );
    }
}

export default Header;