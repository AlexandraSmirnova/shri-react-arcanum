import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import File from 'static/svg/file.svg';
import Folder from 'static/svg/folder.svg';
import Table from '../../components/Table';
import IconPlus from '../../components/__supportComponents/IconPlus';

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

    wrapContentItem = (item) => {
        const icon = item.isDirectory ? <Folder /> : <File />;
        return [
            (
                <IconPlus
                    icon={icon}
                    iconMod="IconPlus-Icon_indent-r_s"
                    right
                >
                    <Link to="/file" className="Link">{item.name}</Link>
                </IconPlus>
            ),
            <Link to="/file" className="Link">43dfse</Link>,
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
    content: state.directory.content,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryTable);