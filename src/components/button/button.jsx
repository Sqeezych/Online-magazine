import styled from 'styled-components';

const ClassicButton = styled.button`
	height: ${({ height = '50px' }) => height};
	width: ${({ width = '220px' }) => width};
	font-size: ${({ fontSize = '19px' }) => fontSize};
	border: 1px solid #000;
	border-radius: ${({ borderRadius = '20px' }) => borderRadius};
	background-color: #ffffff;
	color: #8a1f1f;
	&:hover {
		cursor: pointer;
	}
`;

export const Button = ({ children, ...props }) => (
	<ClassicButton {...props}>{children}</ClassicButton>
);
