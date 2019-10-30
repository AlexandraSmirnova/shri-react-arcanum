import * as React from 'react';
import * as classnames from 'classnames';
import './styles.scss';


interface Props {
    className: string;
};

class Tab extends React.Component<Props> {
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