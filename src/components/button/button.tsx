import styled from 'styled-components';

type ButtonProps = {
	children: React.ReactNode;
	height?: string;
	width?: string;
	fontSize?: string;
	borderRadius?: string;
} & React.ComponentPropsWithoutRef<'button'>

const ButtonContainer = ({ children, height, width, fontSize, borderRadius, ...props }: ButtonProps) => (
	<button {...props}>{children}</button>
);

export const Button = styled(ButtonContainer)`
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