import * as React from 'react';
import * as classnames from 'classnames';
import Arrow from 'static/svg/Arrow.svg';
import IconPlus from '../IconPlus';
import Icon from '../Icon';

import './styles.scss';
import { findDOMNode } from 'react-dom';


interface Props {
    buttonItem: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

interface State {
    isOpened: boolean;
}

class Dropdown extends React.Component<Props, State> {
    state = {
        isOpened: false,
    }

    private componentNode: Element | null | Text = null;

    public componentDidMount() {
        this.componentNode = findDOMNode(this);
        window.addEventListener('click', this.handleOutsideClick, true);
    }

    public componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick, true);
    }

    handleOutsideClick = (e: MouseEvent) => {
        let outsideClick = true;
        let el = e.target as Node;

        while (el && el.parentNode) {
            if (el === this.componentNode) {
                outsideClick = false;
                break;
            }
            el = el.parentNode;
        }

        if (outsideClick) {
            this.setState({ isOpened: false });
        }
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
            'Dropdown-Icon', 
            isOpened && 'Dropdown-Icon_state_open'
        );

        return (
            <div className={mainCh}>
                <IconPlus
                    icon={<Icon className={iconCh}><Arrow /></Icon>}
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