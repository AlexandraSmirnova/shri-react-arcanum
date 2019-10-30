import * as React from 'react';
import './styles.scss';


interface Props {
    linkHref: string;
    onClick?: () => void;
};

class Link extends React.Component<Props> {
    render() {
        const { children, linkHref, onClick } = this.props;

        if (linkHref) {
            return (
                <a className="Link" href={linkHref}>
                    {children}
                </a>
            ); 
        }

        return (
            <div className="Link" onClick={onClick}>
                {children}
            </div>
        );
    }
}

export default Link;