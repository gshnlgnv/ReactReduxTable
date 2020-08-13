import {
    DATA_SORT_ID,
    FETCH_DATA_ERROR, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS,
    ASC, DESC,
    GET_ROW_ID,
    CLEAR_INFO,
    MAKE_TABLE_VISIBLE,
    GET_VALUE_FROM_INPUT
} from "./consts";

const initialState = {
    pending: false,
    data: [],
    error: null,
    sort: null,
    activeIDNo: null,
    selectedRow: null, // prihodit vibranniy object po ID
    tableVisability: "none",

};

const sortDataFunction = (sort, a, b) => {  // sort prishel pervim iz bind
    if (sort === ASC) {
        if (a['id'] < b['id']) return -1;
        if (a['id'] > b['id']) return 1;
        return 0;
    } else if (sort === DESC) {
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
            return {
                ...state,
                data: state.data.concat().sort(sortDataFunction.bind(this, state.sort)),  // v bind ly4she ykazivat perviy arg 'this' ili 'null', vtoroi argument pridet v F pervim
                sort: state.sort === ASC ? DESC : ASC,
            };
        case GET_ROW_ID:
            return {
                ...state,
                activeIDNo: action.payload,
                selectedRow: state.data.find(item => {
                    return item.id === action.payload;
                })
            };
        case CLEAR_INFO:
            return {
                ...state,     // vsegda nado vozvrashat' state bazoviy
                activeIDNo: null,
            };
        case MAKE_TABLE_VISIBLE:
            return {
                ...state,
                tableVisability: true,
            };
        case GET_VALUE_FROM_INPUT:
            return {
                ...state,
                [action.fieldType]: action.fieldValue,


            };
        default:
            return state;
    }
};
