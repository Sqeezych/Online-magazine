import { useDispatch, useSelector } from 'react-redux';
import { addCheckedCategory, removeCheckedCategory } from '../../../../../actions';
import { selectCheckedCategories } from '../../../../../selectors';
import styled from 'styled-components';

const CategoryContainer = ({ className, id, name }) => {
	const dispatch = useDispatch();
	const checkedCategories = useSelector(selectCheckedCategories);

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
				<input
					type="checkbox"
					value={id}
					checked={checkedCategories.includes(id)}
					onChange={onChange}
				/>
				{name}
			</label>
		</div>
	);
};

export const Category = styled(CategoryContainer)`
	display: flex;
	align-items: center;
	padding: 0 10px;
	width: 230px;
	height: 30px;
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 20px;

	& input {
		margin-right: 5px;
	}
`;
