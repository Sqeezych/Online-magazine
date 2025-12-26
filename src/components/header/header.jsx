import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../icon/icon.jsx';
import { Button } from '../button/button.jsx';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	const location = useLocation();

	return (
		<div className={className}>
			<div className="header-buttons">
				<Icon id="fa-shopping-cart" size="40px" inactive={false} />
				<Link to="/authorize">
					<Button>Войти/регистрация</Button>
				</Link>
			</div>
			{location.pathname !== '/' ? (
				<Link to="/">
					<div className="to-main-page">На главную</div>
				</Link>
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

	& .header-buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& .to-main-page {
		position: absolute;
		left: 50px;
		top: 120px;
		font-size: 14px;
		text-decoration: underline;
	}
`;
