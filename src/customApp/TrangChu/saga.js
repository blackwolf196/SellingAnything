import {all, takeEvery, put, fork, call} from 'redux-saga/effects';
import actions from './actions';
import api from './config';

export function* getList() {
  yield takeEvery(actions.GETLIST_REQUEST, function* ({payload}) {
    const pokemon = yield call(api.DanhSachPokemon, payload.filterData);
  });
}

export default function* rootSaga() {
  yield all([
    fork(getList)
  ]);
}
