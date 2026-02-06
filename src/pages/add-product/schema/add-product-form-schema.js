import * as yup from 'yup';

export const addProductFormSchema = yup.object().shape({
	name: yup.string().required('Заполните поле наименование'),
	category: yup.string().required('Заполните поле категория'),
	price: yup.string().required('Заполните поле цены'),
	count: yup.string().required('Заполните поле кол-ва товара'),
	image: yup.string().required('Заполните поле изображения'),
});
