import {AllEffect, all} from 'redux-saga/effects';
import playerWatcher from 'src/store/sagas/PlayerSaga';

function* rootSaga(): Generator<AllEffect<unknown>, void, unknown> {
  yield all([playerWatcher()]);
}

export default rootSaga;
