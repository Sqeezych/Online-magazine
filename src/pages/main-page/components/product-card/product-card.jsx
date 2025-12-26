import { Button } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCardContainer = ({ className, id, name, price, imageUrl }) => (
	<div className={className}>
		<div className="product-image">
			<img src={imageUrl} alt="Картинка" />
		</div>
		<div className="product-description">
			<Link to={`/product/${id}`}>
				<div className="product-description-title">{name}</div>
			</Link>
			<div className="product-description-buy-block">
				<div className="product-description-price">{price} руб.</div>
				<div className="product-description-button">
					<Button width="140px" height="30px" fontSize="21px">
						Купить
					</Button>
				</div>
			</div>
		</div>
	</div>
);

export const ProductCard = styled(ProductCardContainer)`
	display: flex;
	align-items: center;
	padding: 0 30px;
	width: 580px;
	height: 150px;
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 20px;

	& .product-description {
		margin-left: 30px;
	}

	& .product-description-title {
		font-size: 20px;
	}

	& .product-description-buy-block {
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
	}

	& .product-description-price {
		font-size: 24px;
	}

	& .product-description-button {
		margin-left: 90px;
	}
`;
