import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import {
  getUserInfoAction,
  getUserInfoActionAsync,
  changeUserLanguageField,
  changeUserLanguageFieldAsync,
  clearUserError,
  clearUserErrorAsync,
} from '../actions/user.actions';
import UserApi from '../../services/api/user';

function plugeWorker() {
  return true;
}

function changeUserLanguageWorker(language) {
  return { language };
}

export function* userSaga() {
  yield takeEvery(getUserInfoAction, bindAsyncActions(getUserInfoActionAsync)(UserApi.getUserInfoEndpoint));
  yield takeEvery(changeUserLanguageField, bindAsyncActions(changeUserLanguageFieldAsync)(changeUserLanguageWorker));
  yield takeEvery(clearUserError, bindAsyncActions(clearUserErrorAsync)(plugeWorker));
}
