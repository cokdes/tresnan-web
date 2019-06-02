import authReducer from './authReducer'
import jodohReducer from './jodohReducer'
import { combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    jodoh: jodohReducer
});

export default rootReducer