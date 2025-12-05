import { Icon } from './icon.jsx';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return (
		<div className={className}>
			<Icon id="fa-shopping-cart" size="40px" />
		</div>
	);
};

export const Header = styled(HeaderContainer)`
	position: absolute;
	top: 0;
	display: flex;
	border-bottom: 3px solid #8a1f1f;
	height: 120px;
	width: 100%;
	background-color: #fdf3e2;
`;
