import {combineReducers} from 'redux'

import auth from './auth'
import packages from './packages'
//import packages from './quote'

const reducers = combineReducers({
  auth,
  packages
})

export default reducers
