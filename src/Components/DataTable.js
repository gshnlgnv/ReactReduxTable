import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {DataSortId} from "../actions";

class DataTable extends Component {

    render() {


        return (

            <Table className="table" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th onClick={() => {
                        console.log("click");
                        //console.log(props.data);
                        //props.testConsole();
                        this.props.DataSortId();



                    }
                    }>#
                    </th>
                    <th onClick={() => this.props.fieldSortLetter("firstName")}>Имя</th>
                    <th onClick={() => this.props.fieldSort("lastName")}>Фамилия</th>
                    <th onClick={() => this.props.fieldSort("email")}>Почта</th>
                    <th>Телефон</th>
                </tr>
                </thead>
                <tbody>
                {this.props.data.map(item => (
                    <tr key={item.id + item.phone} onClick={() => this.props.rowSelected(item)}>

                        {/*тоже через редакс?*/}

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
    return bindActionCreators({DataSortId}, dispatch)
};

export const DataTableContainer = connect(mapStateToProps, mapDispatchToProps)(DataTable);

