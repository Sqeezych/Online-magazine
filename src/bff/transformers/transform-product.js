export const transformProduct = (dbProduct) => ({
	id: dbProduct.id,
	imageUrl: dbProduct.image_url,
	name: dbProduct.name,
	description: dbProduct.description,
	price: dbProduct.price,
	count: dbProduct.count,
	categoryId: dbProduct.category_id,
});
