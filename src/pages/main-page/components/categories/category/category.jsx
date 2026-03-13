import { useDispatch } from 'react-redux';
import { addCheckedCategory, removeCheckedCategory } from '../../../../../actions';
import styled from 'styled-components';

const CategoryContainer = ({ className, id, name }) => {
	const dispatch = useDispatch();
	const onChange = (e) => {
		if (e.target.checked) {
			dispatch(addCheckedCategory(id));
		} else {
			dispatch(removeCheckedCategory(id));
		}
	};
	return (
		<div className={className}>
			<label>
				<input type="checkbox" value={id} onChange={onChange} />
				{name}
			</label>
		</div>
	);
};

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

	& input {
		margin-right: 5px;
	}
`;
