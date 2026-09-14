import * as yup from 'yup';

export const addProductFormSchema = yup.object().shape({
	name: yup.string().required('Заполните поле наименование'),
	categoryId: yup.string().required('Заполните поле категория'),
	price: yup.string().required('Заполните поле цены'),
	count: yup.string().required('Заполните поле кол-ва товара'),
	imageUrl: yup.string().required('Заполните поле изображения'),
	description: yup.string().required('Заполните описание'),
});

export type AddProductFormData = yup.InferType<typeof addProductFormSchema>;