import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addProductFormSchema } from './schema';
import styled from 'styled-components';

const H2 = styled.h2`
	text-align: center;
	font-size: 18px;
	font-weight: 400;
`;

const InputsDiv = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 25px;

	& :last-child {
		margin-bottom: 0;
	}

	& input::placeholder {
		color: #000;
	}

	& textarea::placeholder {
		color: #000;
	}
`;

const Input = styled.input`
	width: 600px;
	height: 50px;

	margin-bottom: 15px;
	padding: 10px;

	border: 1px solid #000;
	border-radius: 10px;
`;

const TextArea = styled.textarea`
	width: 600px;
	height: 200px;
	resize: none;

	margin-bottom: 15px;
	padding: 7px 0 7px 10px;

	border: 1px solid #000;
	border-radius: 10px;
`;

const SubmitButton = styled.button`
	width: 600px;
	height: 50px;

	margin-top: 40px;

	background-color: #fdf3e2;

	border: 1px solid #000;
	border-radius: 10px;
`;

const AddProductContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			category: '',
			price: '',
			count: '',
			image: '',
			description: '',
		},
		resolver: yupResolver(addProductFormSchema),
	});

	// const addProduct = async ({ name, category, price, count, image }) => {
	// 	const response = await fetch('http://localhost:3000/products', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			image_url: image,
	// 			name: name,
	// 			description: description,
	// 			price: price,
	// 			count: count,
	// 			category_id: category,
	// 		}),
	// 	});
	// };

	// const onSubmit = ({ name, category, price, count, image }) => {
	// 	reset();
	// };
	// onSubmit={handleSubmit(onSubmit)}
	return (
		<form className={className}>
			<H2>Добавить товар</H2>
			<InputsDiv>
				<Input
					type="text"
					{...register('name')}
					placeholder="Наименование товара"
				></Input>
				<Input
					type="text"
					{...register('price')}
					placeholder="Стоимость товара"
				></Input>
				<Input
					type="text"
					{...register('count')}
					placeholder="Кол-во товара"
				></Input>
				<Input
					type="text"
					{...register('image')}
					placeholder="Изображение товара"
				></Input>
				<Input
					type="select"
					{...register('category')}
					placeholder="Категория товара"
				></Input>
				<TextArea
					{...register('category')}
					placeholder="Описание товара..."
				></TextArea>
			</InputsDiv>
			<SubmitButton type="submit">Добавить</SubmitButton>
		</form>
	);
};

export const AddProduct = styled(AddProductContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 900px;
	height: fit-content;

	padding: 15px 30px;
	margin-top: 50px;

	background-color: #fff;

	border: 1px solid #000;
	border-radius: 10px;
`;
