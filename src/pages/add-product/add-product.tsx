import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addProductFormSchema } from './schema';
import { ROLES, OPERATIONS } from '../../constants';
import { Loader } from '../../components';
import { useServerRequest, useAppSelector } from '../../hooks';
import { selectUserRole } from '../../store/selectors';
import type { Category } from '../../types';
import type { AddProductFormData } from './schema';
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
	width: 30%;
	min-height: 30px;
	padding: 10px;

	font-size: 17px;
	text-align: center;
`;

const SuccessCreateProductWindow = styled.div`
	background-color: #9bdfac;
	border: 1px solid #000;
	border-radius: 10px;

	position: absolute;
	top: -50px;
	left: 50%;
	transform: translate(-50%);
	width: 30%;
	height: fit-content;
	padding: 10px;

	font-size: 18px;
	text-align: center;
`;

interface AddProductProps {
	className?: string;
}

const AddProductContainer = ({ className }: AddProductProps) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<AddProductFormData>({
		defaultValues: {
			name: '',
			categoryId: '',
			price: '',
			count: '',
			imageUrl: '',
			description: '',
		},
		resolver: yupResolver(addProductFormSchema),
	});

	const [categories, setCategories] = useState<Category[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [successCreateProduct, setSuccessCreateProduct] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const userRole = useAppSelector(selectUserRole);

	useEffect(() => {
		if (userRole !== ROLES.ADMIN) {
			setIsLoading(false);
			navigate('/access-error');
		} else {
			requestServer(OPERATIONS.FETCH_CATEGORIES).then(({ error, res }) => {
				if (error) {
					setServerError(error);
				} else if (!error && res) {
					setCategories(res);
				}
				setIsLoading(false);
			});
		}
	}, []);

	const showSuccessCreateProduct = () => {
		setSuccessCreateProduct(true);
		setTimeout(() => {
			setSuccessCreateProduct(false);
		}, 2000);
	};

	const onSubmitForm = (data: AddProductFormData) => {
		requestServer(OPERATIONS.CREATE_PRODUCT, data).then(({ error }) => {
			if (error) {
				setServerError(error);
			} else {
				showSuccessCreateProduct();
			}
		});
		reset();
	};

	const onChangeForm = () => {
		setServerError(null);
	};

	const validationError =
		errors?.name?.message ||
		errors?.price?.message ||
		errors?.count?.message ||
		errors?.imageUrl?.message ||
		errors?.categoryId?.message ||
		errors?.description?.message;
	const errorMessage = validationError || serverError;

	if (isLoading) {
		return <Loader />
	} else {
		return (
			<form
				className={className}
				onSubmit={handleSubmit(onSubmitForm)}
				onChange={onChangeForm}
			>
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
						{...register('imageUrl')}
						placeholder="Изображение товара"
					></Input>
					<Select {...register('categoryId')}>
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
				{errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
				{successCreateProduct ? (
					<SuccessCreateProductWindow>
						Товар успешно добавлен
					</SuccessCreateProductWindow>
				) : null}
			</form>
		);
	}
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
