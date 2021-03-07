import { createAction, handleAction } from 'redux-actions';

const CHANGEDATE = 'inspection/CHANGEDATE';
const CHANGEPROCESS = 'inspection/CHANGEPROCESS';

// export const changeDate = date => ({ type: CHANGEDATE, ...date });
// export const changeProcess = process => ({ type: CHANGEPROCESS, process });

export const changeDate = createAction(CHANGEDATE, date => ({ startDate: date.startDate, endDate: date.endDate }));
export const changeProcess = createAction(CHANGEPROCESS, process => process);

const initialState = {
  startDate: '',
  endDate: '',
  process: 0,
};

const inspection = handleAction(
  {
    [CHANGEDATE]: (state, { payload }) => ({
      ...state,
      startDate: payload.startDate,
      endDate: payload.endDate,
    }),
    [CHANGEPROCESS]: (state, { payload }) => ({
      ...state,
      process: payload,
    }),
  },
  initialState
);

// function inspection(state = initialState, action) {
//   switch (action.type) {
//     case CHANGEDATE:
//       return {
//         ...state,
//         startDate: action.startDate,
//         endDate: action.endDate,
//       };

//     case CHANGEPROCESS:
//       return {
//         ...state,
//         process: action.process,
//       };

//     default:
//       return state;
//   }
// }

export default inspection;
