import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFileContent } from '../../client/apiService';

class FileEditor extends Component {
    state = {
        content: null,
    }

    componentDidMount() {
        const { path, repo } = this.props;
        fetchFileContent(repo, path)
            .then((res) => this.setState({ content: res }))
            .catch((e) => this.setState(e));
    }

    render() {
        return (
            <div>
                {this.state.content}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    path: state.directory.path,
    repo: state.repositories.current,
})

export default connect(mapStateToProps)(FileEditor);