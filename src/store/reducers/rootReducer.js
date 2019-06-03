import authReducer from './authReducer'
import jodohReducer from './jodohReducer'
import matchReducer from './matchReducer'
import { combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    jodoh: jodohReducer,
    match: matchReducer
});

export default rootReducer