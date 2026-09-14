import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { addCheckedCategory, removeCheckedCategory } from '../../../../../store/reducers';
import { selectCheckedCategories } from '../../../../../store/selectors';
import styled from 'styled-components';

interface CategoryProps {
	className?: string;
	id: number;
	name: string;
}

const CategoryContainer = ({ className, id, name }: CategoryProps) => {
	const dispatch = useAppDispatch();
	const checkedCategories = useAppSelector(selectCheckedCategories);

	const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		if (target.checked) {
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
