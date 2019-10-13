import * as React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { setDirectoryContentThunk } from '../../client/store/thunks';
import { State as ReduxState, ThunkDispatchWrap } from '../../client/store/types';

import './styles.scss';


interface Props {
    current: string;
    path: string[];
    onСhangePath: (pathToItem: string) => void;
};

interface State {
    items: string[];
}

const getPathArray = (pathString: string): string[] => pathString
    .split('/')
    .filter((item) => item);

class Breadcrumbs extends React.Component<Props, State> {
    state = {
        items: this.props.path,
    }

    componentWillReceiveProps(newProps: Props) {
        if (newProps.path !== this.props.path) {
            this.setState({ items: newProps.path });
        }
    }

    handleBreadcrumbClick = (pathToItem: string) => () => {
        const { onСhangePath, path } = this.props;

        if (pathToItem !== path.join('/')) {
            onСhangePath(pathToItem);
        }
    }

    getBreadcrumb = (item: string, index: number) => {
        const { items } = this.state;
        const pathToItem = index !== -1 ? items.slice(0, index + 1).join('/') : '';
        
        return (
            <RouterLink
                to={pathToItem ? `/tree/${pathToItem}` : '/'}
                className="Breadcrumbs-Item"
                key={item}
                onClick={this.handleBreadcrumbClick(pathToItem)}
            >
                {item}
            </RouterLink>
        );
    }

    render() {
        const { current } = this.props;
        const { items } = this.state;

        return (
            <div className="Breadcrumbs">
                {this.getBreadcrumb(current, -1)}
                {items.map(this.getBreadcrumb)}
            </div>
        );
    }
}


const mapStateToProps = (state: ReduxState) => ({
    path: getPathArray(state.directory.path),
    current: state.repositories.current
});

const mapDispatchToProps = (dispatch: ThunkDispatchWrap) => ({
    onСhangePath: (path: string) =>
        dispatch(setDirectoryContentThunk(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);