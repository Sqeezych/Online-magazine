export const getProducts = async (URL: string) => {
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Ошибка при получении списка товаров');
	}

	return response.json();
};
