import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Button, SearchInput } from '../../components';
import { Categories, ProductCard } from './components';
import styled from 'styled-components';

const MainPageContainer = ({ className }) => {
	const [products, setProducts] = useState([]);
	// const dispatch = useDispatch();

	useEffect(() => {
		fetch('http://localhost:3000/products')
			.then((response) => response.json())
			.then((products) => {
				setProducts(products);
			});
	}, []);

	return (
		<div className={className}>
			<SearchInput />

			<div className="content">
				<Categories className="content-categories" />
				<div className="content-items">
					<Button
						className="content-filter-button"
						width="580px"
						height="60px"
						fontSize="24px"
					>
						Отфильтровать по стоимости
					</Button>
					<div className="content-items-products">
						{products.map(({ id, name, price, image_url }) => (
							<ProductCard
								key={id}
								id={id}
								name={name}
								price={price}
								imageUrl={image_url}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const MainPage = styled(MainPageContainer)`
	margin-bottom: 40px;

	& .content {
		display: flex;
		margin-top: 50px;
	}

	& .content-items {
		margin-left: 50px;
	}

	& .content-filter-button {
		margin-bottom: 50px;
	}

	& .content-items-products > * {
		margin-bottom: 32px;
	}

	& .content-items-products > :last-child {
		margin-bottom: 0;
	}
`;
