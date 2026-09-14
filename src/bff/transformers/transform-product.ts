import type { Product } from "../../types";
import type { DbProduct } from "../types";

export const transformProduct = (dbProduct: DbProduct): Product => ({
	id: dbProduct.id,
	imageUrl: dbProduct.image_url,
	name: dbProduct.name,
	description: dbProduct.description,
	price: dbProduct.price,
	count: dbProduct.count,
	categoryId: dbProduct.category_id,

})
