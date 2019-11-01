import * as React from 'react';
import { connect } from 'react-redux';
import Link from '../../components/__supportComponents/Link';
import { State } from '../../client/store/types';
import './styles.scss';


interface Props {
    title: string;
    commitInfo: {
        hash: string;
        data: string;
        author: string;
    };
}

class NavDescription extends React.Component<Props> {
    static defaultProps = {
        commitInfo: {
            hash: 'cggfh3',
            data: new Date().toString(),
            author: 'robot-srch-releaser',
        },
    };

    public render() {
        const { title, commitInfo } = this.props;
        return (
            <div className="NavDescription">
                <div className="NavDescription-Title">
                    {title}
                </div>
                {
                    commitInfo && (
                        <div className="NavDescription-Info">
                            Last commit <Link linkHref={`/commit/${commitInfo.hash}`}>{commitInfo.hash}</Link>
                            on <Link linkHref={`/commit/${commitInfo.hash}`}>{commitInfo.data}</Link>
                            by {commitInfo.author}
                        </div>
                    )
                }

            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    title: state.repositories.current,
});

export default connect(mapStateToProps)(NavDescription);
