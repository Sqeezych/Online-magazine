import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../components';
import { Category } from './category';
import { useServerRequest } from '../../../../hooks';
import { OPERATIONS } from '../../../../constants';
import { selectCategories } from '../../../../selectors';
import { getCategories, CHANGE_IS_FILTERED } from '../../../../actions';
import styled from 'styled-components';

const CategoriesContainer = ({ className }) => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer(OPERATIONS.FETCH_CATEGORIES).then(({ error, res }) => {
			if (!error) {
				dispatch(getCategories(res));
			}
		});
	}, []);

	const onClick = () => {
		dispatch(CHANGE_IS_FILTERED);
	};

	return (
		<div className={className}>
			<div className="categories-title">Категории</div>
			<div className="categories-list">
				{categories.map(({ id, name }) => (
					<Category className="categories-item" key={id} name={name} id={id} />
				))}
			</div>
			<Button
				className="categories-button"
				width="230px"
				height="40px"
				fontSize="16px"
				onClick={onClick}
			>
				Искать по категориям
			</Button>
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

	& .categories-title {
		font-size: 24px;
		color: #8a1f1f;
	}

	& .categories-list {
		margin-top: 30px;
	}

	& .categories-button {
		margin-top: 30px;
		font-size: 18px;
	}
`;
