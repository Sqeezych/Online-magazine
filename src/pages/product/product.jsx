// import { useState, useEffect } from 'react';
import { SearchInput, Button } from '../../components';
import styled from 'styled-components';

const PriceAndBuyButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0 0 390px;

	width: 400px;
`;

const Image = styled.img`
	width: 350px;
	height: 350px;
`;

const ProductContainer = ({ className }) => {
	return (
		<>
			<SearchInput />
			<div className={className}>
				<div className="change-product-button">Изменить</div>
				<div className="flex-container">
					<div className="title">
						Товар с супер огромным названием, потому что наименование товара
						действительно может быть очень огромным и оно должно отображаться
						полностью
					</div>
					<PriceAndBuyButton>
						<div className="price">{'Стоимость'} руб.</div>
						<Button
							className="content-filter-button"
							width="140px"
							height="30px"
							fontSize="21px"
						>
							Купить
						</Button>
					</PriceAndBuyButton>
					<div className="product-count">Доступно на складе - {20} шт.</div>
					<div className="photo-and-description">
						<Image src="https://pngicon.ru/file/uploads/sova-s-pismom.png" />
					</div>
				</div>
			</div>
		</>
	);
};

export const Product = styled(ProductContainer)`
	position: relative;
	width: 900px;
	min-height: 600px;
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 20px;
	margin: 80px 0;
	padding: 80px 40px 70px 70px;

	& .change-product-button {
		position: absolute;
		top: 25px;
		right: 25px;
		font-size: 14px;
	}

	& .flex-container {
		display: flex;
		flex-direction: column;
	}

	& .title,
	.price {
		font-size: 21px;
	}

	& .product-count {
		font-size: 14px;
		margin: 10px 0 0 390px;
	}
`;
