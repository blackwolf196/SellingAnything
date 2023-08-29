import actions from './actions';

const initState = {
  DanhSachPhim: [],
  TotalRow: 0,
  LoadingData: false
};

export default function authReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GETLIST_REQUEST:
      return {
        ...state,
        LoadingData: true
      };
    case actions.GETLIST_REQUEST_SUCCESS:
      return {
        ...state,
        DanhSachPhim: payload.DanhSachPhim,
        LoadingData: false
      };
    case actions.GETLIST_REQUEST_ERROR:
      return {
        ...state,
        LoadingData: false
      };
    default:
      return state;
  }
}
