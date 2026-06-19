import {
	AppStateType,
	CartStateType,
	ProductStateType,
	UserStateType,
	CategoriesStateType
} from '../reducers';

export interface RootState {
	app: AppStateType,
	categories: CategoriesStateType,
	product: ProductStateType,
	user: UserStateType,
	cart: CartStateType,
}
