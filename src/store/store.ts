import { configureStore } from '@reduxjs/toolkit';
import {
    appReducer,
    cartReducer,
    categoriesReducer,
    productReducer,
    userReducer
} from './reducers';

const rootReducer = {
    app: appReducer,
    categories: categoriesReducer,
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
};

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;