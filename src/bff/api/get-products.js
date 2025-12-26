import { transformProduct } from '../transformers';

export const getProducts = () => {
	fetch('http://localhost:3000/products')
		.then((response) => response.json())
		.then((products) => {
			return products.map(transformProduct);
		});
};
