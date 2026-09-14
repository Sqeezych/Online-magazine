import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SearchInput, Loader } from '../../components';
import { PhotoAndDescription, PriceAndBuyButton } from './components';
import { ROLES, OPERATIONS } from '../../constants';
import { setProduct, setCategories } from '../../store/reducers';
import { selectUserRole } from '../../store/selectors';
import { useServerRequest } from '../../hooks';
import type { Product as ProductType } from '../../types';
import styled from 'styled-components';

const ProductCount = styled.div`
	font-size: 14px;
	margin: 10px 0 0 390px;
`;

interface ProductProps {
	className?: string;
}

const ProductContainer = ({ className }: ProductProps) => {
	const requestServer = useServerRequest();
	const dispatch = useAppDispatch();
	const userRole = useAppSelector(selectUserRole);
	const { id } = useParams();
	const [productForView, setProductForView] = useState<ProductType | null>(null);

	useEffect(() => {
		if (id) {
			requestServer(OPERATIONS.FETCH_PRODUCT, id).then(({ error, res }) => {
				if (!error && res) {
					setProductForView(res);
					dispatch(setProduct(res));
				} else {
					console.log(error);
				}
			});
			requestServer(OPERATIONS.FETCH_CATEGORIES).then(({ error, res }) => {
				if (!error && res) {
					dispatch(setCategories(res));
				}
			});
		}
	}, []);

	if (!productForView || !id) {
		return <Loader />
	} else {
		return (
			<>
				<SearchInput />
				<div className={className}>
					{userRole === ROLES.ADMIN ? (
						<Link to='/' className="change-product-button">Изменить</Link>
						// Изменить роут у Link
					) : null}
					<div className="flex-container">
						<div className="title">{productForView.name}</div>
						<PriceAndBuyButton product={productForView} id={id} />

						<ProductCount>
							Доступно на складе - {productForView.count} шт.
						</ProductCount>
						<PhotoAndDescription
							img={productForView.imageUrl}
							description={productForView.description}
						/>
					</div>
				</div>
			</>
		);
	}
};

export const Product = styled(ProductContainer)`
	position: relative;
	width: 900px;
	height: fit-content;
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 20px;
	margin: 80px 0 40px;
	padding: 80px 40px 70px 70px;

	& .change-product-button {
		position: absolute;
		top: 25px;
		right: 25px;
		font-size: 14px;
		text-decoration: underline;
	}

	& .flex-container {
		display: flex;
		flex-direction: column;
	}

	& .title {
		font-size: 22px;
	}
`;
