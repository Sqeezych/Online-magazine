import { useState, useEffect } from 'react';
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

	font-size: 17px;
`;

const Select = styled.select`
	width: 600px;
	height: 50px;

	margin-bottom: 15px;
	padding: 10px;

	border: 1px solid #000;
	border-radius: 10px;

	font-size: 17px;
`;

const TextArea = styled.textarea`
	width: 600px;
	height: 200px;
	resize: none;

	margin-bottom: 15px;
	padding: 7px 0 7px 10px;

	border: 1px solid #000;
	border-radius: 10px;

	font-size: 17px;
`;

const SubmitButton = styled.button`
	width: 600px;
	height: 50px;

	margin-top: 40px;

	background-color: #fdf3e2;

	border: 1px solid #000;
	border-radius: 10px;
`;

const ErrorContainer = styled.div`
	background-color: #f8abab;
	border: 1px solid #000;
	border-radius: 10px;

	position: absolute;
	top: 320px;
	left: 0;
	width: 100%;
	min-height: 60px;
	padding: 20px 20px;

	font-size: 17px;
	text-align: center;
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

	const [categories, setCategories] = useState([]);
	// const [serverError, setServerError] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/categories')
			.then((response) => response.json())
			.then((categories) => setCategories(categories));
	}, []);

	const addProduct = async (name, category, price, count, image, description) => {
		await fetch('http://localhost:3000/products', {
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
	};

	const onSubmit = ({ name, category, price, count, image, description }) => {
		addProduct(name, category, price, count, image, description);
		reset();
	};

	const validationError =
		errors?.name?.message ||
		errors?.price?.message ||
		errors?.count?.message ||
		errors?.image?.message ||
		errors?.category?.message ||
		errors?.description?.message;
	// const errorMessage = validationError || serverError;

	return (
		<form className={className} onSubmit={handleSubmit(onSubmit)}>
			<H2>Добавить товар</H2>
			<InputsDiv>
				<Input
					type="text"
					{...register('name')}
					placeholder="Наименование товара"
				></Input>
				<Input
					type="number"
					{...register('price')}
					placeholder="Стоимость товара"
				></Input>
				<Input
					type="number"
					{...register('count')}
					placeholder="Кол-во товара"
				></Input>
				<Input
					type="text"
					{...register('image')}
					placeholder="Изображение товара"
				></Input>
				<Select {...register('category')}>
					<option value="" hidden={true}>
						Выберите категорию
					</option>
					{categories.map(({ name, id }) => (
						<option key={id} value={id}>
							{name}
						</option>
					))}
				</Select>
				<TextArea
					{...register('description')}
					placeholder="Описание товара..."
				></TextArea>
			</InputsDiv>
			<SubmitButton type="submit">Добавить</SubmitButton>
			{validationError ? <ErrorContainer>{validationError}</ErrorContainer> : null}
		</form>
	);
};

export const AddProduct = styled(AddProductContainer)`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	width: 900px;
	height: fit-content;

	padding: 20px 30px;
	margin-top: 50px;

	background-color: #fff;

	border: 1px solid #000;
	border-radius: 10px;
`;
