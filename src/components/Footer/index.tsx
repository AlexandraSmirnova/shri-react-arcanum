import * as React from 'react';
import Link from '../__supportComponents/Link';
import './styles.scss';


interface Props {
    text: string;
    copyright: string;
    linkHref: string;
    linkText: string;
    version: string;
}

class Footer extends React.Component<Props> {
    public static defaultProps = {
        text: 'Trade secrets of Yandex LLC. 16, Lev Tolstoy Str., Moscow, Russia, 119021',
        version: 'UI: 0.1.15',
        copyright: '© 2007—2019',
        linkHref: 'https://yandex.ru',
        linkText: 'Yandex',
    };

    public render() {
        const { text, copyright, linkHref, linkText, version } = this.props;

        return (
            <div className="Footer">
                <div>{text}</div>
                <div className="ContentInfo">
                    <div className="ContentInfo-Item">{version}</div>
                    <div className="ContentInfo-Item">
                        {copyright} <Link linkHref={linkHref}>{linkText}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
