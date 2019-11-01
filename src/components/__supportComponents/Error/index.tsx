import * as React from 'react';
import './styles.scss';

interface Props {
    title: string;
    message: string;
}

class Error extends React.Component<Props> {
    public render() {
        const { title, message } = this.props;

        return (
            <div className="Error">
                <div className="Error-Title">{title}</div>
                <div className="Error-Message">{message}</div>
            </div>
        );
    }
}

export default Error;
