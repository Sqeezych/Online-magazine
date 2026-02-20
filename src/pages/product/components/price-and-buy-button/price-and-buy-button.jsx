import { useDispatch, useSelector } from 'react-redux';
import { addProductIntoCart } from '../../../../actions';
import { Button, IncrementAndDecrementButtons } from '../../../../components';
import styled from 'styled-components';

const Price = styled.div`
	font-size: 22px;
`;

// const IncrementAndDecrementButtons = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;

// 	padding: 5px 10px;

// 	width: 150px;
// 	height: 30px;

// 	font-size: 18px;
// 	color: #8a1f1f;

// 	border: 1px solid #000;
// 	border-radius: 20px;
// `;

// const IncrementOrDecrementButton = styled.button`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	width: 30px;
// 	height: 20px;

// 	font-size: 20px;

// 	border: 1px solid #000;
// 	border-radius: 5px;

// 	&:hover {
// 		cursor: pointer;
// 	}
// `;

const PriceAndBuyButtonContainer = ({ className, product, id }) => {
	const dispatch = useDispatch();
	const productFromCart = useSelector((state) => state.cart.products).find(
		(elem) => elem?.id === id,
	);
	// const cartProducts = useSelector((state) => state.cart.products);
	// const productFromCart = cartProducts.find((elem) => elem?.id === id);

	const addToCart = () => {
		dispatch(addProductIntoCart(product));
	};

	return (
		<div className={className}>
			<Price>{product.price} руб.</Price>
			{productFromCart ? (
				<IncrementAndDecrementButtons
					product={product}
					productFromCart={productFromCart}
				/>
			) : (
				<Button width="200px" height="30px" fontSize="18px" onClick={addToCart}>
					Добавить в корзину
				</Button>
			)}
		</div>
	);
};

export const PriceAndBuyButton = styled(PriceAndBuyButtonContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0 0 390px;

	width: 400px;
`;
