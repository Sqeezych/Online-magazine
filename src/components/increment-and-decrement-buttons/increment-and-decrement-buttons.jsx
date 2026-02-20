import { useDispatch } from 'react-redux';
import {
	deleteProductFromCart,
	decrementCountOfProduct,
	incrementCountOfProduct,
} from '../../actions';
import { Icon } from '../icon/icon.jsx';
import styled from 'styled-components';

const IncrementOrDecrementButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 30px;
	height: 20px;

	font-size: 20px;

	border: 1px solid #000;
	border-radius: 5px;

	&:hover {
		cursor: pointer;
	}
`;
const ProductCountDiv = styled.div``;

const IncrementAndDecrementButtonsContainer = ({
	className,
	product,
	productFromCart,
}) => {
	const dispatch = useDispatch();

	const deleteFromCart = () => {
		dispatch(deleteProductFromCart(product.id));
	};
	const decrementProductCount = () => {
		dispatch(decrementCountOfProduct(product));
	};
	const incrementProductCount = () => {
		dispatch(incrementCountOfProduct(product));
	};

	return (
		<div className={className}>
			<IncrementOrDecrementButton onClick={decrementProductCount}>
				-
			</IncrementOrDecrementButton>
			<ProductCountDiv>{productFromCart.countInCart}</ProductCountDiv>
			<IncrementOrDecrementButton onClick={incrementProductCount}>
				+
			</IncrementOrDecrementButton>
			<Icon id="fa-trash-o" size="20px" inactive={false} onClick={deleteFromCart} />
		</div>
	);
};

export const IncrementAndDecrementButtons = styled(IncrementAndDecrementButtonsContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 5px 10px;

	width: 150px;
	height: 30px;

	font-size: 18px;
	color: #8a1f1f;

	border: 1px solid #000;
	border-radius: 20px;
`;
