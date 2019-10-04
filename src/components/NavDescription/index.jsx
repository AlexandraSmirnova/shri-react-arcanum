import React, { Component } from 'react';
import './styles.scss';
import Link from '../__supportComponents/Link';

class NavDescription extends Component {
    render() {
        const { title, dropdownProps, commitInfo } = this.props;
        return (
            <div className="NavDescription">
                <div className="NavDescription-Title">
                    <span>{title}</span>
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

NavDescription.defaultProps = {
    title: 'arcadia',
    commitInfo: {
        hash: 'cggfh3',
        data: new Date().toString(),
        author: 'robot-srch-releaser'
    }
};

export default NavDescription;