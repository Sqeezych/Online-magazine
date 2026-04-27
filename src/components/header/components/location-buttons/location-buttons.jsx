import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories, selectProductForLocation } from '../../../../selectors';

import styled from 'styled-components';

const LocationButtonsContainer = ({ className, location }) => {
	const product = useSelector(selectProductForLocation);

	const categories = useSelector(selectCategories);

	const category = categories.filter((category) => category.id === product.category_id);
	// console.log(category);

	function checkLocation(pathname, categoryName) {
		if (pathname === '/authorize') {
			return 'Авторизация';
		} else if (pathname === '/register') {
			return 'Регистрация';
		} else if (pathname === '/cart') {
			return <span> / Корзина</span>;
		} else if (pathname.includes('/product')) {
			return <span> {/* / <Link>{categoryName}</Link> / {product.name} */}</span>;
		}
	}

	return (
		<div className={className}>
			<Link to="/">Главная</Link>
			{/* {checkLocation(location, category[0].name)} */}
		</div>
	);
};

export const LocationButtons = styled(LocationButtonsContainer)`
	position: absolute;
	left: 50px;
	top: 120px;

	> a,
	span {
		font-size: 14px;
		color: #8a1f1f;
	}
`;
