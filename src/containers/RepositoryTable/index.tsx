import * as React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import File from 'static/svg/file.svg';
import Folder from 'static/svg/folder.svg';
import Table from '../../components/Table';
import IconPlus from '../../components/__supportComponents/IconPlus';
import { setDirectoryContentThunk, setFileContentThunk } from '../../client/store/thunks';
import { ThunkDispatchWrap, State } from '../../client/store/types';
import { ContentDirectoryData } from '../../client/types';

const extraCellClassNames = {
    2: 'Table-Cell_fraction_col-2',
    4: 'Table-Cell_align_right'
};

const headers = ['Name', 'Last commit', 'Commit message', 'Commitier', 'Updater'];

interface Props {
    contentPath: string;
    path: string;
    content: ContentDirectoryData[];
    onСhangeDirectory: (path: string) => void;
    onFileClick: (path: string) => void;
}

class RepositoryTable extends React.Component<Props> {
    componentWillUpdate() {
        const { contentPath, onСhangeDirectory, path } = this.props;
        if (contentPath && contentPath !== path) {
            onСhangeDirectory(contentPath);
        }
    }

    getTableCellItem = (item: React.ReactNode, index: number) => ({
        content: item,
        className: index == 2 || index == 4
            ? extraCellClassNames[index] : '',
    })

    getPathToItem = (item: ContentDirectoryData) => {
        const { path } = this.props;
        return path ? `${path}/${item.name}` : item.name;
    }

    handleDirectoryClick = (pathToItem: string) => () => {
        const { onСhangeDirectory } = this.props;;
        onСhangeDirectory(pathToItem);
    }

    handleFileClick = (pathToItem: string) => () => {
        const { onFileClick } = this.props;;
        onFileClick(pathToItem);
    }

    wrapContentItem = (item: ContentDirectoryData) => {
        const icon = item.isDirectory ? <Folder /> : <File />;
        const pathToItem = this.getPathToItem(item);

        return [
            (
                <IconPlus
                    icon={icon}
                    iconMod="indent-r_s"
                    right
                >
                    {
                        item.isDirectory
                            ? (
                                <RouterLink
                                    to={`/tree/${pathToItem}`}
                                    className="Link"
                                    onClick={this.handleDirectoryClick(pathToItem)}
                                >
                                    {item.name}
                                </RouterLink>
                            )
                            : (
                                <RouterLink
                                    to={`/file/${pathToItem}`}
                                    className="Link"
                                    onClick={this.handleFileClick(pathToItem)}
                                >
                                    {item.name}
                                </RouterLink>
                            )
                    }
                </IconPlus>
            ),
            <RouterLink to={`/file/${item.name}`} className="Link">43dfse</RouterLink>,
            "Some fixes was commited",
            "Author",
            "2 days ago"
        ].map(this.getTableCellItem);
    }

    render() {
        const { content } = this.props;
        const tableRows = content
            .map(this.wrapContentItem)

        return (
            <Table
                headers={headers.map(this.getTableCellItem)}
                rows={tableRows}
            />
        );
    }
}

const mapStateToProps = (state: State) => ({
    path: state.directory.path,
    content: state.directory.content,
})

const mapDispatchToProps = (dispatch: ThunkDispatchWrap) => ({
    onСhangeDirectory: (path: string) => {
        dispatch(setDirectoryContentThunk(path));
    },
    onFileClick: (path: string) => {
        dispatch(setFileContentThunk(path))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryTable);