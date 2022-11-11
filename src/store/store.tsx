import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import type { ToDo, Action } from '../typedef/Types';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
const Add = 'ADD';
const Delete = 'DELETE';
const Update = 'UPDATE';

const addToDo = (toDoList: ToDo[]) => {
  return {
    type: Add,
    toDoList,
  };
};

const updateToDo = (toDoList: ToDo[]) => {
  return {
    type: Update,
    toDoList,
  };
};

const deleteToDo = (toDoList: ToDo[]) => {
  return {
    type: Delete,
    toDoList,
  };
};

const reducer = (state: ToDo[] = [], action: Action) => {
  console.log(action);
  switch (action.type) {
    case Add:
      return action.toDoList;
    case Delete:
      return action.toDoList;
    case Update:
      return action.toDoList;
    default:
      return state;
  }
};
const rootReducer = combineReducers({ reducer });
const persistConfig = { key: 'root', storage, whitelist: ['reducer'] };

const perReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  updateToDo,
};

export default store;
