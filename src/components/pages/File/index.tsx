import * as React from 'react';
import FileEditor from '../../../containers/FileEditor';
import Breadcrumbs from '../../../containers/Breadcrumbs';
import { match } from 'react-router';


interface Props {
    match: match<{ path: string }>
}

const File: React.FC<Props> = ({ match }) => {
    return (
        <div>
            <Breadcrumbs />
            <FileEditor filePath={match.params.path} />
        </div>
    );
}

export default File;