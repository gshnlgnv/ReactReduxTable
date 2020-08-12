import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {DataTableContainer} from "./Components/DataTable";  // рендерим коннеченный компонент
import Loading from "./Components/Loading";
import ShowRow from "./Components/ShowRow";
import Paginator from "./Components/Paginator";
import {connect} from "react-redux";
import {getData,makeTableVisibleAgain} from "./actions";
import {bindActionCreators} from "redux";

class App extends Component {
    renderTable() {
        const {pending, error} = this.props;

        if (pending) {
            return <Loading/>;
        } else if (!error) {
            return <DataTableContainer/>
        } else {
            return <div>error</div>
        }
    }

    render() {
        const {activeRow, getData} = this.props;

        return (
            <div className="container">
                <h2>Тестовая разработка</h2>
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
                                getData(32);
                                this.props.makeTableVisibleAgain();
                            }}
                        > Маленький
                        </button>
                        <button
                            type="button"
                            title=" ~ 1000 шт"
                            className="btn btn-secondary"
                            onClick={() => {
                                getData(1000);
                            }}
                        >Большой
                        </button>
                    </div>
                    <div style={{display: this.props.tableVisability}}>
                        <Form.Group>
                            <Form.Control size="sm" type="text" placeholder="Введите информацию для поиска"/>
                        </Form.Group>
                        <Button variant="primary">Найти</Button>
                        <Button variant="primary">Добавить</Button>
                        {this.renderTable()} {/*надо делать рендер метод, потому что так принято (с) вадим*/}
                        <Paginator/>
                        {activeRow && <ShowRow/>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pending: state.fetchDataReducer.pending,
    error: state.fetchDataReducer.error,
    activeRow: state.fetchDataReducer.activeIDNo,
    data: state.fetchDataReducer.data,
    tableVisability: state.fetchDataReducer.tableVisability,


});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getData,makeTableVisibleAgain}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);