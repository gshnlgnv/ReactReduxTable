import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import {DataTableContainer} from "./Components/DataTable";  // рендерим коннеченный компонент
import Loading from "./Components/Loading";

import ShowRow from "./Components/ShowRow";
import Paginator from "./Components/Paginator";

import {connect} from "react-redux";
import {getData} from "./actions";

import {bindActionCreators} from "redux";

class App extends Component {
    constructor() {
        super();
        this.state = {
            row: null,
        }
    }

    rowSelected = (row) => {
        console.log(row);
        this.setState({
            row: row,
        })
    };


    // спросить про правильную отрисовку ошибки

    // renderTable() {
    //     return this.props.pending ? <Loading/> : <DataTableContainer/>;
    // }

    renderTable() {
        if (this.props.pending) {
            return <Loading/>;
        } else if (!this.props.pending && !this.props.error) {
            return <DataTableContainer/>
        } else {
            return <div>error</div>
        }
    }

    render() {
        let vis = "true"; // true

       // const tableLoading = this.props.pending ? <Loading/> : <DataTableContainer/>;

        const personInfo = this.state.row ? <ShowRow person={this.state.row}/> : null;

        return (
            <div className="container">

                <h2>Test work</h2>

                <div>
                    <div>
                        <h4>Выбрать массив данных</h4>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">

                        <button
                            type="button"
                            title=" ~ 32 шт"
                            className="btn btn-secondary"
                            onClick={() => {
                                this.props.getData(32);
                            }}
                        > Маленький
                        </button>

                        <button
                            type="button"
                            title=" ~ 1000 шт"
                            className="btn btn-secondary"
                            onClick={() => {
                                this.props.getData(1000);
                            }}
                        >Большой
                        </button>
                    </div>

                    <div style={{display: "none"}}>

                        {/*делать два класса и менять их*/}

                        hello
                    </div>

                    <div style={{display: vis}}>
                        <Form.Group>
                            <Form.Control size="sm" type="text" placeholder="Введите информацию для поиска"/>
                        </Form.Group>

                        <Button variant="primary">Найти</Button>
                        <Button variant="primary">Добавить</Button>

                        {this.renderTable()}  {/*надо делать рендер метод, потому что так принято (с) вадим*/}

                        <Paginator/>
                        {personInfo}
                    </div>

                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    //data: state.fetchDataReducer.data,
    pending: state.fetchDataReducer.pending,
    error: state.fetchDataReducer.error,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);