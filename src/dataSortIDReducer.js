// import {DATA_SORT_ID} from './consts'
// import {CONSOLING} from './consts'
// import {fetchDataReducer} from "./fetchDataReducer";
//
// const initialState = {
//     rowDirection: 'asc',
// };
//
// //const sortType = initialState.rowDirection === 'asc' ? 'desc' : 'asc';
//
// const sortDataFunction = (a ,b) => {
//     return (a['id'] > b['id']) ? -1 : -1
// };
//
// export const dataSortIDReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case DATA_SORT_ID:
//             return {
//                 ...state,
//                 data: fetchDataReducer.data.sort(sortDataFunction),
//                 //rowDirection: {sortType},
//                 };
//         default:
//             return state;
//
//     }
// };
//
