import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	categoriesReducer,
	userReducer,
	productReducer,
	productsReducer,
} from './reducers';

const reducer = combineReducers({
	categories: categoriesReducer,
	product: productReducer,
	products: productsReducer,
	user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
