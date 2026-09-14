import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { Button, IncrementAndDecrementButtons } from '..';
import { selectCartProducts } from '../../selectors';
import type { ProductCardType } from './product-card-types';
import styled from 'styled-components';

const ProductCardContainer = ({ className, product, onBuy }: ProductCardType) => {

	const productFromCart = useAppSelector(selectCartProducts).find(
		(elem) => elem?.id === product.id,
	);

	return (
		<div className={className}>
			<img src={product.imageUrl} alt="Картинка" />
			<div className="product-description">
				<Link to={`/product/${product.id}`}>
					<div className="product-description-title">{product.name}</div>
				</Link>
				<div className="product-description-buy-block">
					<div className="product-description-price">{product.price} руб.</div>
					<div className="product-description-button">
						{productFromCart ? (
							<IncrementAndDecrementButtons
								productFromCart={productFromCart}
							/>
						) : (
							<Button
								width="150px"
								height="30px"
								fontSize="21px"
								onClick={onBuy}
							>
								Купить
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	display: flex;
	align-items: center;

	padding: 0 30px;

	width: 580px;
	height: 150px;

	background-color: #fff;

	border: 1px solid #000;
	border-radius: 20px;

	& img {
		width: 128px;
		height: 128px;
	}

	& .product-description {
		margin-left: 30px;
	}

	& .product-description-title {
		font-size: 20px;
	}

	& .product-description-buy-block {
		width: 360px;
		display: flex;
		justify-content: space-between;

		margin-top: 40px;
	}

	& .product-description-price {
		font-size: 24px;
	}
`;
