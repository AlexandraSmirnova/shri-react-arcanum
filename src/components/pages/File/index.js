import React, { Component } from 'react';
import './styles.scss';
import FileEditor from '../../../containers/FileEditor';

class File extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
               <FileEditor />
            </div>
        );
    }
}

export default File;