import styled from 'styled-components';

const CategoryContainer = ({ className, children }) => (
	<div className={className}>
		<div className="category-checkbox">
			<input type="checkbox" />
		</div>
		<div className="category-name">{children}</div>
	</div>
);

export const Category = styled(CategoryContainer)`
	display: flex;
	align-items: center;
	padding: 0 10px;
	margin-bottom: 10px;
	width: 230px;
	height: 30px;
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 20px;

	& .category-name {
		margin-left: 5px;
	}
`;
