export const getProduct = async (URL: string) => {
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Ошибка при получении товара')
	} else {
		return response.json();
	}
}
