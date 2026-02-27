export const addProduct = async ({
	name,
	category,
	price,
	count,
	image,
	description,
}) => {
	const response = await fetch('http://localhost:3000/products', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			image_url: image,
			name: name,
			description: description,
			price: Number(price),
			count: Number(count),
			category_id: Number(category),
		}),
	});

	if (!response.ok) {
		throw new Error('Ошибка при отправке товара на сервер');
	}
};
