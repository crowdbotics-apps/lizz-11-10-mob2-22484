import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth6176230Reducer from '../features/EmailAuth6176230/redux/reducers';
import EmailAuth1170492Reducer from '../features/EmailAuth1170492/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth6176230: EmailAuth6176230Reducer,
EmailAuth1170492: EmailAuth1170492Reducer,

});