import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return <div className={className}></div>;
};

export const Header = styled(HeaderContainer)`
	position: absolute;
	top: 0;
	border-bottom: 3px solid #8a1f1f;
	height: 120px;
	width: 100%;
	background-color: #fdf3e2;
`;
