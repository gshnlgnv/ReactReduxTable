import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {clearSelectedRow} from "../actions";

class ShowRow extends Component {
    render() {
        // vse 4to nige - destrukturizaciya
        const {
            clearSelectedRow,
            personID,
            vibranniyObjectPoID: {
                firstName,
                lastName,
                description,
                address: {streetAddress, city, state, zip}
            }
        } = this.props;

        return (
            <div>
                <div>
                    <div>
                        <h4>Общая информация по строке {personID}</h4>
                    </div>
                    <div>
                        <p><b>Имя:</b> {firstName}</p>
                        <p><b>Фамилия:</b> {lastName}</p>
                        <p><b>Описание:</b> {description}</p>
                        <p><b>Адрес проживания:</b> {streetAddress}</p>
                        <p><b>Город:</b> {city}</p>
                        <p><b>Штат:</b> {state}</p>
                        <p><b>Индекс:</b> {zip}</p>
                    </div>
                    <button type="button" className="btn btn-dark"
                            onClick={() => {
                                clearSelectedRow();
                            }}
                    >Закрыть инфо
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        personID: state.fetchDataReducer.activeIDNo,
        vibranniyObjectPoID: state.fetchDataReducer.selectedRow,  // prihodit vibranniy МАССИВ po ID
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({clearSelectedRow}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowRow);