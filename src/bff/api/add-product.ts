export interface ProductDataType {
	name: string;
	categoryId: string;
	price: string;
	count: string;
	imageUrl: string;
	description: string;
};

export const addProduct = async ({
	name,
	categoryId,
	price,
	count,
	imageUrl,
	description,
}: ProductDataType): Promise<void> => {
	const response = await fetch('http://localhost:3000/products', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			name: name,
			description: description,
			price: Number(price),
			count: Number(count),
			category_id: Number(categoryId),
		}),
	});

	if (!response.ok) {
		throw new Error('Ошибка при отправке товара на сервер');
	}
};
