import styled from 'styled-components';

const ChangeProductContainer = ({ className }) => {
	return (
		<form className={className}>
			<h2>Добавить товар</h2>
			<div className="inputs">
				<input className="name" placeholder="Наименование товара"></input>
				<input className="category" placeholder="Категория товара"></input>
				<input className="price" placeholder="Стоимость товара"></input>
				<input className="count" placeholder="Кол-во товара"></input>
				<input className="image" placeholder="Изображение товара"></input>
			</div>
			<button type="submit">Добавить</button>
		</form>
	);
};

export const ChangeProduct = styled(ChangeProductContainer)`
	display: flex;
`;
