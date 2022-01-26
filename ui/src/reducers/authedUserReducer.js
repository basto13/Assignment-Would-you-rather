import {SET_AUTHED_USER} from "../actions/authedUser"
import { LOG_OUT_USER } from "../actions/logoutUser"

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.user
        case LOG_OUT_USER:
            return null
        default:
            return state
    }
}