import styled from 'styled-components';

interface IconProps {
	className?: string;
	id: string;
	inactive: boolean;
	size?: string;
	margin?: string;
	onClick?: () => void;
}

const IconContainer = ({ className, id, inactive, size, margin, ...props }: IconProps) => (
	<div className={className} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	&:hover {
		cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	}
`;
