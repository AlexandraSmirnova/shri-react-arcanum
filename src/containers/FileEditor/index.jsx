import React, { Component } from 'react';
import { connect } from 'react-redux';
import CodeFile from 'static/svg/codefile.svg'

import { setFileContentThunk } from '../../client/store/thunks';
import './styles.scss';
import IconPlus from '../../components/__supportComponents/IconPlus';
import Icon from '../../components/__supportComponents/Icon';


class FileEditor extends Component {
    componentWillUpdate(prevProps) {
        const { filePath, content, onLoadFile, repo } = this.props;

        if (!content && prevProps.repo !== repo) {
            onLoadFile(filePath);
        }
    }

    getLineView = (line, index) => (
        <div className="FileRow">
            <div className="FileRow-Number">{ index }</div>
            <div className="FileRow-Content">{ line }</div>
        </div>
    )

    render() {
        const { content, name } = this.props;
        if (!content) {
            return <div>Файл не найден</div>
        }

        return (
            <div className="FileEditor">
                <div className="FileEditor-Head">
                    <IconPlus
                        icon={<Icon><CodeFile /></Icon>}
                        iconMod="indent-r_m"
                        right
                    >
                        {name}
                    </IconPlus>
                </div>
                <div className="FileEditor-Content Font Font_type_mono">
                    { content.map(this.getLineView) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.file.name,
    path: state.directory.path,
    repo: state.repositories.current,
    content: state.file.content,
})

const mapDispatchToProps = (dispatch) => ({
    onLoadFile: (path) => {
        dispatch(setFileContentThunk(path))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FileEditor);