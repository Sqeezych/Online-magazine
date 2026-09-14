import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, SearchInput, Loader } from '../../components';
import { Categories, ProductCard } from './components';
import { useServerRequest } from '../../hooks';
import { selectCheckedCategories, selectAppIsFiltered } from '../../store/selectors';
import { addProductIntoCart } from '../../store/reducers';
import { OPERATIONS } from '../../constants';
import { debounce } from '../../utils';
import type { Product } from '../../types';
import styled from 'styled-components';

const Products = styled.div`
	> *:not(:last-child) {
		margin-bottom: 32px;
	}
`;

interface MainPageProps {
	className?: string;
}

const MainPageContainer = ({ className }: MainPageProps) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [searchPhrase, setSearchPhrase] = useState<string | null>(null);
	const checkedCategories = useAppSelector(selectCheckedCategories);
	const isFiltered = useAppSelector(selectAppIsFiltered);

	const requestServer = useServerRequest();
	const dispatch = useAppDispatch();

	const addToCart = (product: Product) => {
		dispatch(addProductIntoCart(product));
	};

	useEffect(() => {
		setIsLoading(true);
		requestServer(OPERATIONS.FETCH_PRODUCTS, { searchPhrase, checkedCategories }).then(
			({ error, res }) => {
				if (!error && res) {
					setProducts(res);
				} else {
					setServerError(error);
				}
				setIsLoading(false);
			},
		);
	}, [searchPhrase, isFiltered]);

	const debouncedSetSearchPhrase = debounce(setSearchPhrase, 1500);
	const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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
										<ProductCard
											key={product.id}
											product={product}
											onBuy={() => addToCart(product)} />
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
