import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SearchInput } from '../../components';
import { PhotoAndDescription, PriceAndBuyButton } from './components';
import { selectUserRole } from '../../selectors';
import { ROLES } from '../../constants';
import styled from 'styled-components';

const ProductCount = styled.div`
	font-size: 14px;
	margin: 10px 0 0 390px;
`;

const ProductContainer = ({ className }) => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3000/products/${id}`)
			.then((response) => response.json())
			.then((productFromServer) => setProduct(productFromServer));
	}, []);

	const userRole = useSelector(selectUserRole);

	return (
		<>
			<SearchInput />
			<div className={className}>
				{userRole === ROLES.ADMIN ? (
					<Link className="change-product-button">Изменить</Link>
				) : null}
				<div className="flex-container">
					<div className="title">{product.name}</div>
					<PriceAndBuyButton product={product} id={id} />

					<ProductCount>Доступно на складе - {product.count} шт.</ProductCount>
					<PhotoAndDescription
						img={product.image_url}
						description={product.description}
					/>
				</div>
			</div>
		</>
	);
};

export const Product = styled(ProductContainer)`
	position: relative;
	width: 900px;
	// height: 600px;
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
