import { useState, useEffect } from 'react';
import { Button } from '../../../../components';
import { Category } from './category';
import styled from 'styled-components';

const CategoriesContainer = ({ className }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/categories')
			.then((response) => response.json())
			.then((categories) => setCategories(categories));
	}, []);

	return (
		<div className={className}>
			<div className="categories-title">Категории</div>
			<div className="categories-list">
				{categories.map((elem) => (
					<Category className="categories-item" key={elem.id}>
						{elem.name}
					</Category>
				))}
			</div>
			<Button
				className="categories-button"
				width="230px"
				height="40px"
				fontSize="16px"
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
		margin-top: 40px;
		font-size: 18px;
	}
`;
