import {DATA_SORT_ID,
        FETCH_DATA_ERROR, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS} from "./consts";

const initialState = {
    pending: false,
    data: [],
    error: null,
    sort: null,
};

const sortDataFunction = (sort, a, b) => {

    if (sort === 'ascending') {

        if (a['id'] < b['id']) return -1;
        if (a['id'] > b['id']) return 1;
        return 0;

    } else if (sort === 'descending') {

        if (a['id'] > b['id']) return -1;
        if (a['id'] < b['id']) return 1;
        return 0;
    }
};

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload,
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        case DATA_SORT_ID:

           // const sorttingFunction = sortDataFunction.bind(this, state.sort);
            // прочитать бинд

            return {
                ...state,

                data: state.data.concat().sort(sortDataFunction.bind(this, state.sort)),
                sort: state.sort === 'ascending' ? 'descending' : 'ascending',
            };

        default:
            return state;
    }
};
