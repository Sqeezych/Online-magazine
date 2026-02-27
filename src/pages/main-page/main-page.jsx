import { useState, useEffect } from 'react';
import { Button, SearchInput, Loader } from '../../components';
import { Categories, ProductCard } from './components';
import { useServerRequest } from '../../hooks';
import { OPERATIONS } from '../../constants';
import styled from 'styled-components';

const Products = styled.div`
	> *:not(:last-child) {
		margin-bottom: 32px;
	}
`;

const MainPageContainer = ({ className }) => {
	const [products, setProducts] = useState([]);
	const [serverError, setServerError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const requestServer = useServerRequest();

	useEffect(() => {
		setIsLoading(true);
		requestServer(OPERATIONS.FETCH_PRODUCTS).then(({ error, res }) => {
			if (!error) {
				setProducts(res);
			} else {
				setServerError(error);
			}
			setIsLoading(false);
		});
	}, []);

	return (
		<div className={className}>
			<SearchInput />
			<Loader />
			<div className="content">
				<Categories className="content-categories" />
				<div className="content-items">
					{serverError ? (
						<div>{serverError}</div>
					) : (
						<>
							<Button
								className="content-filter-button"
								width="580px"
								height="60px"
								fontSize="24px"
							>
								Отфильтровать по стоимости
							</Button>
							<Products>
								{products.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</Products>
						</>
					)}
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
`;
