import React, { Component } from 'react';
import * as classnames from 'classnames';
import './styles.scss';

class Table extends Component {
    renderTableCell = (item) => (
        <div className={classnames("Table-Cell", item.className)} >
            {item.content}
        </div>
    );

    render() {
        const { headers, rows } = this.props;

        return (
            <div className="Table">
                <div className="Table-Head Table-Row Table-Row_border-top Table-Row_order_change">
                    {headers.map(this.renderTableCell)}
                </div>
                {
                    rows.map((row) => (
                        <div className="Table-Row Table-Row_border_top Table-Row_order_change">
                            {row.map(this.renderTableCell)}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Table;