import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser, selectCartTotalCount, selectCartTotalPrice } from '../../selectors';
import { Icon } from '../icon';
import { AboutUser, EnterButton, LocationButtons } from './components';
import { ROLES } from '../../constants';
import styled from 'styled-components';

const HeaderButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > .fa fa-plus {
		position: absolute;
	}
`;

const IconWithTotalPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const InformationFromCart = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	margin-left: 20px;
	> div {
		font-size: 17px;
	}
`;
const AboutUserBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& .add-product {
		margin-left: 10px;
	}
`;

const HeaderContainer = ({ className }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const user = useSelector(selectUser);
	const totalPrice = useSelector(selectCartTotalPrice);
	const totalCount = useSelector(selectCartTotalCount);

	const navigateToCart = () => {
		navigate('/cart');
	};
	const navigateToAddProduct = () => {
		navigate('/add-product');
	};

	return (
		<div className={className}>
			<HeaderButtons>
				<IconWithTotalPrice>
					<Icon
						id="fa-shopping-cart"
						size="40px"
						inactive={false}
						onClick={navigateToCart}
					/>
					<InformationFromCart>
						<div>{totalCount} товаров</div>
						<div>{totalPrice} руб.</div>
					</InformationFromCart>
				</IconWithTotalPrice>
				<AboutUserBlock>
					{user.roleId !== ROLES.GUEST ? (
						<AboutUser user={user} />
					) : (
						<EnterButton />
					)}
					{user.roleId === ROLES.ADMIN ? (
						<Icon
							className="add-product"
							id="fa-plus"
							size="20px"
							inactive={false}
							onClick={navigateToAddProduct}
						/>
					) : null}
				</AboutUserBlock>
			</HeaderButtons>
			{location.pathname !== '/' ? (
				<LocationButtons location={location.pathname} />
			) : null}
		</div>
	);
};

export const Header = styled(HeaderContainer)`
	position: absolute;
	left: 0;
	top: 0;
	padding: 25px 50px;
	border-bottom: 3px solid #8a1f1f;
	height: 100px;
	width: 100%;
	background-color: #fdf3e2;
`;
