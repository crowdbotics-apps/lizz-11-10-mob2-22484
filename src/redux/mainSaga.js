import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6176230Saga from '../features/EmailAuth6176230/redux/sagas';
import EmailAuth1170492Saga from '../features/EmailAuth1170492/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth6176230Saga,
EmailAuth1170492Saga,
    
  ]);
}