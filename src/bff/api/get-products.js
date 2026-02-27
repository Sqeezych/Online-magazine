export const getProducts = async () => {
	const response = await fetch('http://localhost:3000/products');

	if (!response.ok) {
		throw new Error('Ошибка при получении списка товаров');
	}

	return response.json();
};
