import { Action, createReducer, on } from '@ngrx/store';
import { LoginActions } from '../actions';


export interface LoginState {
  isLoading: boolean;
  isLoaded: boolean;
  errorMessage: string;
}

export const loginInitialState: LoginState = {
  isLoading: false,
  isLoaded: false,
  errorMessage: '',
};
export function loginReducer(_state: LoginState, _action: Action) {
  return createReducer(
    loginInitialState,
    on(LoginActions.Login, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(LoginActions.LoginFailure, (state, action) => ({
      ...state,
      isLoading: false,
      isLoaded: false,
      errorMessage: action.errorMessage,
    })),

    on(LoginActions.LoginSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      isLoaded: true,
    })),

  )(_state, _action);
}
