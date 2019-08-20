import { combineReducers } from 'redux-immutable';

import StandardReducer from '../pages/standard/store/reducer';
import DetailReducer from '../pages/detail/store/reducer';

const reducer = combineReducers({
  standard: StandardReducer,
  detail: DetailReducer
});

export default reducer;