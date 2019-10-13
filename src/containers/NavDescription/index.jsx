import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../components/__supportComponents/Link';
import './styles.scss';

class NavDescription extends Component {
    render() {
        const { title, dropdownProps, commitInfo } = this.props;
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

NavDescription.defaultProps = {
    commitInfo: {
        hash: 'cggfh3',
        data: new Date().toString(),
        author: 'robot-srch-releaser'
    }
};

const mapStateToProps = (state) => ({
    title: state.repositories.current
});

export default connect(mapStateToProps)(NavDescription);