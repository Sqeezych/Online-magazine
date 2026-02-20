import { useSelector, useDispatch } from 'react-redux';
import { addProductIntoCart } from '../../actions';
import { Button, IncrementAndDecrementButtons } from '..';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCardContainer = ({ className, product }) => {
	const dispatch = useDispatch();
	const productFromCart = useSelector((state) => state.cart.products).find(
		(elem) => elem?.id === product.id,
	);

	const addToCart = () => {
		dispatch(addProductIntoCart(product));
	};

	return (
		<div className={className}>
			{/* <div className="product-image"> */}
			<img src={product.image_url} alt="Картинка" />
			{/* </div> */}
			<div className="product-description">
				<Link to={`/product/${product.id}`}>
					<div className="product-description-title">{product.name}</div>
				</Link>
				<div className="product-description-buy-block">
					<div className="product-description-price">{product.price} руб.</div>
					<div className="product-description-button">
						{productFromCart ? (
							<IncrementAndDecrementButtons
								product={product}
								productFromCart={productFromCart}
							/>
						) : (
							<Button
								width="150px"
								height="30px"
								fontSize="21px"
								onClick={addToCart}
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

	// & .product-description-button {
	// 	margin-left: 90px;
	// }
`;
