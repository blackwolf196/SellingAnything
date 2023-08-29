import { all } from 'redux-saga/effects';
import authSagas from '@iso/redux/auth/saga';
import devSaga from '../customApp/sagas';

export default function* rootSaga() {
  yield all([authSagas(), ...devSaga]);
}
