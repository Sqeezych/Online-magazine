export const getProducts = async (URL) => {
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Ошибка при получении списка товаров');
	}

	return response.json();
};
