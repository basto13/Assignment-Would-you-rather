import {SET_AUTHED_USER} from "../actions/authedUser"
import { LOG_OUT_USER } from "../actions/logoutUser"

export default function authedUser(state = JSON.parse(localStorage.getItem('authUser')), action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            localStorage.setItem('authUser', JSON.stringify(action.user))
            return action.user
        case LOG_OUT_USER:
            localStorage.removeItem('authUser')
            return null
        default:
            return state
    }
}