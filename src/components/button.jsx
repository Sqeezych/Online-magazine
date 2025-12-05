import styled from 'styled-components';

const ButtonContainer = ({ className, children, ...props }) => (
	<div className={className} {...props}>
		<button>{children}</button>
	</div>
);

export const Button = styled(ButtonContainer)`
	heigth: ${({ height = '24px' }) => {
		height;
	}};
	width: ${}
`;
