import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import { selectProduct } from '../../../../selectors';
import styled from 'styled-components';

interface LocationButtonsProps {
	className?: string;
	location: string;
}

const LocationButtonsContainer = ({ className, location }: LocationButtonsProps) => {
	const product = useAppSelector(selectProduct);

	function checkLocation(pathname: string) {
		if (pathname === '/authorize') {
			return <span> / Авторизация</span>;
		} else if (pathname === '/register') {
			return <span> / Регистрация</span>;
		} else if (pathname === '/cart') {
			return <span> / Корзина</span>;
		} else if (pathname.includes('/product')) {
			return <span> / {product.name}</span>;
		}
	}

	return (
		<div className={className}>
			<Link to="/">Главная</Link>
			{checkLocation(location)}
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
