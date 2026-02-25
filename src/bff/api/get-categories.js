export const getCategories = () => {
	fetch('http://localhost:3000/categories')
		.then((response) => response.json())
		.then((categories) => categories);
};
