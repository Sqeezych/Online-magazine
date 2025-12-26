import { Icon } from '../icon/icon.jsx';
import styled from 'styled-components';

const SearchInputContainer = ({ className, ...props }) => (
	<div className={className}>
		<input placeholder="Найти товар..." />
		<Icon className="search-icon" id="fa-search" inactive={false} />
	</div>
);

export const SearchInput = styled(SearchInputContainer)`
	position: relative;
	display: flex;
	align-items: center;

	& input {
		width: 900px;
		height: 50px;
		border: 1px solid #000;
		border-radius: 20px;
		padding: 0 60px 0 20px;
		font-size: 18px;
	}

	::placeholder {
		font-size: 18px;
		color: #8a1f1f;
	}

	& .search-icon {
		position: absolute;
		right: 20px;
	}
`;
