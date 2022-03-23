const actions = {
  GETLIST_REQUEST: 'GETLIST_REQUEST',
  GETLIST_REQUEST_SUCCESS: 'GETLIST_REQUEST_SUCCESS',
  GETLIST_REQUEST_ERROR: 'GETLIST_REQUEST_ERROR',

  getList: (filterData) => ({
    type: actions.GETLIST_REQUEST,
    payload: {filterData}
  }),
};
export default actions;
