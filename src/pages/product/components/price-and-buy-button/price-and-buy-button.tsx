import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { addProductIntoCart } from '../../../../store/reducers';
import { Button, IncrementAndDecrementButtons } from '../../../../components';
import { selectCartProducts } from '../../../../store/selectors';
import type { PriceAndBuyButtonProps } from './Price-and-buy-button-props';
import styled from 'styled-components';

const Price = styled.div`
	font-size: 22px;
`;

const PriceAndBuyButtonContainer = ({ className, product, id }: PriceAndBuyButtonProps) => {
	const dispatch = useAppDispatch();
	const productFromCart = useAppSelector(selectCartProducts).find(
		(elem) => elem?.id === id,
	);

	const addToCart = () => {
		dispatch(addProductIntoCart(product));
	};

	return (
		<div className={className}>
			<Price>{product.price} руб.</Price>
			{productFromCart ? (
				<IncrementAndDecrementButtons
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
