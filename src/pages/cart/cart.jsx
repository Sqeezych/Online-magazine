import { useSelector } from 'react-redux';
import { SearchInput, ProductCard } from '../../components';
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

	> div {
		font-size: 18px;
	}
`;

const CartContainer = ({ className }) => {
	const products = useSelector((state) => state.cart.products);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	const totalCount = useSelector((state) => state.cart.totalCount);

	return (
		<div className={className}>
			<SearchInput />
			<H2>Корзина</H2>
			<Content>
				{products.length === 0 ? (
					'В корзине нет товаров'
				) : (
					<ContentProducts>
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</ContentProducts>
				)}
				<Total>
					<TotalTitle>Итого:</TotalTitle>
					<TotalCountAndPrice>
						<div>{totalCount} шт.</div>
						<div>{totalPrice} руб.</div>
					</TotalCountAndPrice>
				</Total>
			</Content>
		</div>
	);
};

export const Cart = styled(CartContainer)`
	margin-bottom: 40px;
`;
