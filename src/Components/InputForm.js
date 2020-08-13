import React, { useState } from "react";
import {Button, Modal, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getValueFromInput} from "../actions";

const InputForm = (props) => {
    const [show, setShow] = useState(false);  // прочитать про реакт хуки
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
               Добавить
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Добавление человека</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Введите данные по человеку для добавления в базу.</p>
                    <p>Необходимо заполнить все поля.</p>
                </Modal.Body>

                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="firstName" placeholder=">" onChange={(event) => {
                                props.getValueFromInput("firstName", event.currentTarget.value);

                            }}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control type="lastName" placeholder=">"onChange={(event) => {
                                props.getValueFromInput("lastName", event.currentTarget.value);

                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email адрес</Form.Label>
                            <Form.Control type="email" placeholder=">"onChange={(event) => {
                                props.getValueFromInput("email", event.currentTarget.value);

                            }} />
                            <Form.Text className="text-muted">
                                Мы поделимся им со всеми.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type="phone" placeholder=">"onChange={(event) => {
                                props.getValueFromInput("phone", event.currentTarget.value);

                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Улица/дом</Form.Label>
                            <Form.Control type="streetAddress" placeholder=">"onChange={(event) => {
                                props.getValueFromInput("streetAddress", event.currentTarget.value);

                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Город</Form.Label>
                            <Form.Control type="city" placeholder=">"onChange={(event) => {
                                props.getValueFromInput("city", event.currentTarget.value);

                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Штат</Form.Label>
                            <Form.Control type="state" placeholder=">" onChange={(event) => {
                                props.getValueFromInput("state", event.currentTarget.value);

                            }}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Индекс</Form.Label>
                            <Form.Control type="zip" placeholder=">"onChange={(event) => {
                                props.getValueFromInput("zip", event.currentTarget.value);

                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control type="description" placeholder=">" onChange={(event) => {
                                props.getValueFromInput("description", event.currentTarget.value);

                            }}/>
                        </Form.Group>

                    </Form>
                </div>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                    <Button variant="primary">Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getValueFromInput}, dispatch)
};

export const InputFormContainer = connect(null, mapDispatchToProps)(InputForm);