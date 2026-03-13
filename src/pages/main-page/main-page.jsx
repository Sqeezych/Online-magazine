import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, SearchInput, Loader } from '../../components';
import { Categories, ProductCard } from './components';
import { useServerRequest } from '../../hooks';
import { OPERATIONS } from '../../constants';
import { debounce } from '../../utils';
import { selectCheckedCategories, selectAppIsFiltered } from '../../selectors';
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
	const [searchPhrase, setSearchPhrase] = useState(null);
	const checkedCategories = useSelector(selectCheckedCategories);
	const isFiltered = useSelector(selectAppIsFiltered);

	const requestServer = useServerRequest();

	useEffect(() => {
		setIsLoading(true);
		requestServer(OPERATIONS.FETCH_PRODUCTS, searchPhrase, checkedCategories).then(
			({ error, res }) => {
				if (!error) {
					setProducts(res);
				} else {
					setServerError(error);
				}
				setIsLoading(false);
			},
		);
	}, [searchPhrase, isFiltered]);

	const debouncedSetSearchPhrase = debounce(setSearchPhrase, 1500);
	const onInputChange = ({ target }) => {
		debouncedSetSearchPhrase(target.value.trim());
	};

	return (
		<div className={className}>
			<SearchInput onChange={onInputChange} />
			{isLoading ? (
				<Loader />
			) : (
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
			)}
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
