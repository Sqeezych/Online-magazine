import styled from 'styled-components';

const H2 = styled.h2`
	text-align: center;
	font-size: 18px;
	font-weight: 400;
`;

const InputsDiv = styled.div``;

const Input = styled.input`
	width: 220px;
	height: 30px;

	border: 1px solid #000;
	border-radius: 10px;
`;

const SubmitButton = styled.button`
	width: 220px;
	height: 50px;

	background-color: #fdf3e2;

	border: 1px solid #000;
	border-radius: 10px;
`;

const AddProductFormContainer = ({ className }) => {
	return (
		<form className={className}>
			<H2>Добавить товар</H2>
			<InputsDiv>
				<Input className="name" placeholder="Наименование товара"></Input>
				<Input className="category" placeholder="Категория товара"></Input>
				<Input className="price" placeholder="Стоимость товара"></Input>
				<Input className="count" placeholder="Кол-во товара"></Input>
				<Input className="image" placeholder="Изображение товара"></Input>
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

	padding: 35px 15px;

	background-color: #fff;

	border: 1px solid #000;
	border-radius: 10px;
`;
