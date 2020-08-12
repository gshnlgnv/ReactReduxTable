import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {DataSortId, getRowID} from "../actions";

class DataTable extends Component {
    render() {
        return (
            <Table className="table" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th onClick={() => {
                        this.props.DataSortId()
                    }}>#
                    </th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Почта</th>
                    <th>Телефон</th>
                </tr>
                </thead>
                <tbody>
                {this.props.data.map(item => (
                    <tr key={item.id + item.phone}
                        onClick={
                            () => {
                                this.props.getRowID(item.id);
                                console.log("item.id is ", item.id);
                                console.log("item is ", item);
                                console.log("data length is : ", this.props.data.length);
                            }
                        }
                    >
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>)
                )}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.fetchDataReducer.data,
    })
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({DataSortId, getRowID}, dispatch)
};

export const DataTableContainer = connect(mapStateToProps, mapDispatchToProps)(DataTable);

