import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  categoriesReducer,
  coursesReducer,
  searchesReducer,
  cartReducer,
  ordersReducer,
  authReducer,
  favoritesReducer,
} from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  courses: coursesReducer,
  searches: searchesReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, composedEnhancer);
