import * as React from 'react';
import * as classnames from 'classnames';
import './styles';


interface Props {
    className?: string;
    icon: React.ReactNode;
    iconMod: string;
    right?: boolean;
    onClick?: () => void;
};

class IconPlus extends React.Component<Props> {
    static defaultProps = {
        iconMod: "indent-l_s",
    }

    render() {
        const { className, icon, iconMod, children, onClick, right } = this.props;
        const ch = classnames(
            'IconPlus',
            right && 'IconPlus_i-position_right',
            className,
        );
        const iconCh = classnames(
            'IconPlus-Icon',
            `IconPlus-Icon_${iconMod}`
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

export default IconPlus;