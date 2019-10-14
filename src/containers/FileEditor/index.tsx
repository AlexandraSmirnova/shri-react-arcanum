import * as React from 'react';
import { connect } from 'react-redux';
import CodeFile from 'static/svg/codefile.svg'

import { setFileContentThunk } from '../../client/store/thunks';
import IconPlus from '../../components/__supportComponents/IconPlus';
import Icon from '../../components/__supportComponents/Icon';
import Error from '../../components/__supportComponents/Error';
import { ThunkDispatchWrap, State } from '../../client/store/types';
import { FileContent } from '../../client/types';
import './styles.scss';


interface Props {
    content: FileContent | null,
    filePath: string;
    name: string;
    repo: string;
    onLoadFile: (path: string) => void;
};

class FileEditor extends React.Component<Props> {
    componentWillUpdate(prevProps: Props) {
        const { filePath, content, onLoadFile, repo } = this.props;

        if (!content && prevProps.repo !== repo) {
            onLoadFile(filePath);
        }
    }

    getLineView = (line: string, index: number) => (
        <div className="FileRow">
            <div className="FileRow-Number">{index}</div>
            <div className="FileRow-Content">{line}</div>
        </div>
    )

    render() {
        const { content, name } = this.props;

        if (!content) {
            return <Error title="404" message="Файл не найден" />;
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
                    {content.map(this.getLineView)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    name: state.file.name,
    path: state.directory.path,
    repo: state.repositories.current,
    content: state.file.content,
})

const mapDispatchToProps = (dispatch: ThunkDispatchWrap) => ({
    onLoadFile: (path: string) => {
        dispatch(setFileContentThunk(path))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FileEditor);