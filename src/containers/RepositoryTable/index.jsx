import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink} from 'react-router-dom'
import File from 'static/svg/file.svg';
import Folder from 'static/svg/folder.svg';
import Table from '../../components/Table';
import IconPlus from '../../components/__supportComponents/IconPlus';
import Link from '../../components/__supportComponents/Link';
import { setDirectoryContentThunk } from '../../client/store/thunks';

const extraCellClassNames = {
    2: 'Table-Cell_fraction_col-2', 
    4: 'Table-Cell_align_right'
};

const headers = ['Name', 'Last commit', 'Commit message', 'Commitier', 'Updater'];

class RepositoryTable extends Component {
    getTableCellItem = (item, index) => ({
        content: item,
        className: extraCellClassNames.hasOwnProperty(index) 
            && extraCellClassNames[index],
    })

    handleDirectoryClick = (item) => () => {
        const { path, onСhangeDirectory } = this.props;
        const pathToItem = path ? `${this.props.path}/${item.name}` : item.name;
        onСhangeDirectory(pathToItem);
    }

    wrapContentItem = (item) => {
        const icon = item.isDirectory ? <Folder /> : <File />;
        return [
            (
                <IconPlus
                    icon={icon}
                    iconMod="IconPlus-Icon_indent-r_s"
                    right
                >
                    {
                     item.isDirectory
                        ? <Link onClick={this.handleDirectoryClick(item)}>{item.name}</Link>
                        : <RouterLink to={`/file/${item.name}`} className="Link">{item.name}</RouterLink>
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

const mapStateToProps = (state) => ({
    path: state.directory.path,
    content: state.directory.content,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onСhangeDirectory: (path) =>  {
        dispatch(setDirectoryContentThunk(path));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryTable);