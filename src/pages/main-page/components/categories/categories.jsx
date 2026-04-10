import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../components';
import { Category } from './category';
import { useServerRequest } from '../../../../hooks';
import { OPERATIONS } from '../../../../constants';
import { selectCategories, selectCheckedCategories } from '../../../../selectors';
import {
	getCategories,
	CHANGE_IS_FILTERED,
	RESET_CHECKED_CATEGORIES,
} from '../../../../actions';
import styled from 'styled-components';

const CategoriesTitle = styled.div`
	font-size: 24px;
	color: #8a1f1f;
`;
const CategoriesList = styled.div`
	margin-top: 30px;

	> div:not(:last-child) {
		margin-bottom: 10px;
	}
`;
const ResetCategories = styled.span`
	margin-top: 10px;
	text-decoration: underline;
	color: #8a1f1f;
	font-size: 16px;
	&:hover {
		cursor: pointer;
	}
`;

const CategoriesContainer = ({ className }) => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);
	const checkedCategories = useSelector(selectCheckedCategories);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer(OPERATIONS.FETCH_CATEGORIES).then(({ error, res }) => {
			if (!error) {
				dispatch(getCategories(res));
			}
		});
	}, []);

	const filterCategories = () => {
		dispatch(CHANGE_IS_FILTERED);
	};

	const resetCategories = () => {
		dispatch(RESET_CHECKED_CATEGORIES);
	};

	return (
		<div className={className}>
			<CategoriesTitle>Категории</CategoriesTitle>
			<CategoriesList>
				{categories.map(({ id, name }) => (
					<Category className="categories-item" key={id} name={name} id={id} />
				))}
			</CategoriesList>
			<Button
				className="categories-button"
				width="230px"
				height="40px"
				fontSize="16px"
				onClick={filterCategories}
			>
				Искать по категориям
			</Button>
			{checkedCategories.length !== 0 ? (
				<ResetCategories onClick={resetCategories}>Сбросить</ResetCategories>
			) : null}
		</div>
	);
};

export const Categories = styled(CategoriesContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: fit-content;
	padding: 30px 20px;
	border: 1px solid #000;
	border-radius: 20px;
	background-color: #fff;

	& .categories-button {
		margin-top: 30px;
		font-size: 18px;
	}
`;
