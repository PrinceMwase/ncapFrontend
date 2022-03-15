import { USER_LOGIN } from "../constants";

export function user_login(user: any) {

    return {
        type: USER_LOGIN,
        payload: user
    }
}