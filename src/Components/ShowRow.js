import React from "react";

export default ({person}) => (
    <div>
        <div>
            <h4>Общая информация по человеку</h4>
        </div>
        <div>
            <div>
                <b>{person.firstName + ' ' + person.lastName}</b>
            </div>
                <p>Описание: {person.description}</p>
                <p>Адрес проживания: {person.address.streetAddress}</p>
                <p>Город: {person.address.city}</p>
                <p>Штат: {person.address.state}</p>
                <p>Индекс: {person.address.zip}</p>
        </div>
    </div>
);