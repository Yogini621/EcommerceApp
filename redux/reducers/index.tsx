import {combineReducers} from 'redux'
import Todoreducers from './Todoreducers'

const rootReducer = combineReducers({
    todos: Todoreducers
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>