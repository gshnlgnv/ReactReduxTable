import {
    DATA_SORT_ID,
    FETCH_DATA_ERROR, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS,
    ASC, DESC,
    GET_ROW_ID,
    CLEAR_INFO} from "./consts";

const initialState = {
    pending: false,
    data: [],
    error: null,
    sort: null,
    activeIDNo: null,
    selectedRow: null, // prihodit vibranniy object po ID
};

const sortDataFunction = (sort, a, b) => {
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
                data: state.data.concat().sort(sortDataFunction.bind(this, state.sort)),
                sort: state.sort === ASC ? DESC : ASC,
            };
        case GET_ROW_ID:

            return{
                ...state,
                activeIDNo: action.payload,
                selectedRow: state.data.find( item => {
                    return (item.id === action.payload);

                    // if (item.id === action.payload) {
                    //     return item;
                    // }
                })

                // suda pomestit vibranniy object


            };
        case CLEAR_INFO:
            return {
                ...state,     // vsegda nado vozvrashat state bazoviy
                activeIDNo: null,

            };
        default:
            return state;
    }
};
