import React from 'react';
import FileEditor from '../../../containers/FileEditor';
import Breadcrumbs from '../../../containers/Breadcrumbs';

const File = ({ match }) => {
    return (
        <div>
            <Breadcrumbs />
            <FileEditor filePath={match.params.path} />
        </div>
    );
}

export default File;