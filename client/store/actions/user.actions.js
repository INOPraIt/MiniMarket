import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('USERS');

export const getUserInfoAction = factory.create('GET_USER_INFO');
export const getUserInfoActionAsync = factory.createAsync('GET_USER_INFO_ASYNC');

export const changeUserLanguageField = factory.create('CHANGE_USER_LANGUAGE_FIELD');
export const changeUserLanguageFieldAsync = factory.createAsync('CHANGE_USER_LANGUAGE_FIELD_ASYNC');

export const clearUserError = factory.create('CLEAR_USER_ERROR');
export const clearUserErrorAsync = factory.createAsync('CLEAR_USER_ERROR_ASYNC');
