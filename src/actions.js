import {DATA_SORT_ID,
    GET_ROW_ID,
    FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_PENDING,
    CLEAR_INFO} from "./consts";

export const getData = (rowsQnty) => {
    return dispatch => {
        dispatch(fetchDataPending());
        fetch(`http://www.filltext.com/?rows=${rowsQnty}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                return response.json()
            })
            .then(data => {
                dispatch(fetchDataSuccess(data));
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
};

function fetchDataPending() {
    return {
        type: FETCH_DATA_PENDING,
    }
}

function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    }
}

function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        payload: error,
    }
}

export const DataSortId = () => {
    return {
        type: DATA_SORT_ID,
    }
};

export const getRowID = (item) => {
    return {
        type: GET_ROW_ID,
        payload: item,
    }
};

export const clearSelectedRow = () => {
    return {
        type: CLEAR_INFO,
    }
};


