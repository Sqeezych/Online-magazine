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
	margin-top: 25px;

	& :last-child {
		margin-bottom: 0;
	}

	& input::placeholder {
		color: #000;
	}
`;

const Input = styled.input`
	width: 220px;
	height: 30px;

	margin-bottom: 15px;
	padding: 7px 0 7px 10px;

	border: 1px solid #000;
	border-radius: 10px;
`;

const SubmitButton = styled.button`
	width: 220px;
	height: 50px;

	margin-top: 40px;

	background-color: #fdf3e2;

	border: 1px solid #000;
	border-radius: 10px;
`;

const AddProductFormContainer = ({ className }) => {
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
			},
			resolver: yupResolver(addProductFormSchema),
		});

	// const onSubmit = ({name, category, price, count, image}) => {
	// 	fetch('');
	//  reset();
	// }

	return (
		<form className={className} onSubmit={handleSubmit(onSubmit)}>
			<H2>Добавить товар</H2>
			<InputsDiv>
				<Input {...register('name')} className="name" placeholder="Наименование товара"></Input>
				<Input {...register('category')} className="category" placeholder="Категория товара"></Input>
				<Input {...register('price')} className="price" placeholder="Стоимость товара"></Input>
				<Input {...register('count')} className="count" placeholder="Кол-во товара"></Input>
				<Input {...register('image')} className="image" placeholder="Изображение товара"></Input>
			</InputsDiv>
			<SubmitButton type="submit">Добавить</SubmitButton>
		</form>
	);
};

export const AddProductForm = styled(AddProductFormContainer)`
	display: flex;
	flex-direction: column;

	width: 250px;
	height: 400px;

	padding: 15px 15px 35px 15px;

	background-color: #fff;

	border: 1px solid #000;
	border-radius: 10px;
`;
