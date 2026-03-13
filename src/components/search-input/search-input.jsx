import { Icon } from '../icon/icon.jsx';
import styled from 'styled-components';

const Input = styled.input`
	width: 900px;
	height: 50px;
	border: 1px solid #000;
	border-radius: 20px;
	padding: 0 60px 0 20px;
	font-size: 18px;

	&:focus {
		outline: none;
		border: 2px solid #000;
		box-shadow: 0 0 10px rgba(11, 27, 37, 0.3);
	}

	&::placeholder {
		font-size: 18px;
		color: #8a1f1f;
	}
`;

const SearchIcon = styled(Icon)`
	position: absolute;
	right: 20px;
`;

const SearchInputContainer = ({ className, ...props }) => (
	<div className={className}>
		<Input placeholder="Найти товар..." {...props} />
		<SearchIcon id="fa-search" inactive={true} />
	</div>
);

export const SearchInput = styled(SearchInputContainer)`
	position: relative;
	display: flex;
	align-items: center;
`;
