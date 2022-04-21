import taskReducer from './reducers/task-reducer';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({
    taskReducer,
  })

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

export type RootState = ReturnType<typeof reducer>

export default store;