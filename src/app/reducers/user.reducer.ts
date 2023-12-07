import {
    createReducer,
    on
} from '@ngrx/store';
import { User } from '../models/user.model';
import { LoginActions } from '../actions';

export interface AuthState {
    user: User
}
export const initialAuthState: AuthState = {
    user: {id:"0",email:"undefined"}
};

export const authReducer = createReducer(
    initialAuthState,
    on(LoginActions.login, (state, action) => {
        return {
            user: action.user
        }
    }),

    on(LoginActions.logout, (_state) => {
        return {
            user: undefined
        }
    })

);