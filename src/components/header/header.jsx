import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selectors';
import { Icon } from '../icon/icon.jsx';
import { AboutUser, EnterButton } from './components';
import { ROLES } from '../../constants';
import styled from 'styled-components';

const ToMainPageDiv = styled.div`
	position: absolute;
	left: 50px;
	top: 120px;
	font-size: 14px;
	text-decoration: underline;
`;

const HeaderContainer = ({ className }) => {
	const location = useLocation();
	const user = useSelector(selectUser);

	return (
		<div className={className}>
			<div className="header-buttons">
				<Icon id="fa-shopping-cart" size="40px" inactive={false} />
				{user.roleId !== ROLES.GUEST ? (
					<AboutUser user={user} />
				) : (
					<EnterButton />
				)}
			</div>
			{location.pathname !== '/' ? (
				<Link to="/">
					<ToMainPageDiv>На главную</ToMainPageDiv>
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
`;
