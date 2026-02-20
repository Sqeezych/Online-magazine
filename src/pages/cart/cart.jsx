import { useSelector } from 'react-redux';
import { Button, SearchInput } from '../../components';
import { ProductCard } from '../../components';
import styled from 'styled-components';

const H2 = styled.h2`
	font-size: 26px;
	font-weight: 400;

	margin-top: 50px;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 50px;
`;

const ContentProducts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > div:not(:last-child) {
		margin-bottom: 32px;
	}
`;

const Total = styled.div`
	padding: 30px;

	width: 270px;
	height: 150px;

	background-color: #fff;

	border: 1px solid #000;
	border-radius: 20px;
`;

const TotalTitle = styled.div`
	font-size: 20px;
`;

const TotalCountAndPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 40px;
`;

const TotalCount = styled.div`
	font-size: 18px;
`;

const TotalPrice = styled.div`
	font-size: 18px;
`;

const CartContainer = ({ className }) => {
	const products = useSelector((state) => state.cart.products);
	const totalPrice = useSelector((state) => state.cart.totalPrice);

	// const dispatch = useDispatch();

	return (
		<div className={className}>
			<SearchInput />
			<H2>Корзина</H2>
			<Content>
				<ContentProducts>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</ContentProducts>
				<Total>
					<TotalTitle>Итого:</TotalTitle>
					<TotalCountAndPrice>
						<TotalCount>{22} шт.</TotalCount>
						<TotalPrice>{totalPrice} руб.</TotalPrice>
					</TotalCountAndPrice>
				</Total>
			</Content>
		</div>
	);
};

export const Cart = styled(CartContainer)`
	margin-bottom: 40px;
`;
