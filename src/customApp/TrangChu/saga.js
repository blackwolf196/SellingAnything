import { all, fork } from 'redux-saga/effects';
// import actions from './actions';

export function* getList() {
  // yield takeEvery(actions.GETLIST_REQUEST, function* ({ payload }) {
  // const pokemon = yield call(api.DanhSachPokemon, payload.filterData);
  // });
}

export default function* rootSaga() {
  yield all([fork(getList)]);
}
