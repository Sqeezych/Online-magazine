import { Link } from 'react-router-dom';
import { SearchInput, Button } from '../../components';
import styled from 'styled-components';

const PriceAndBuyButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0 0 390px;

	width: 400px;
`;

const Image = styled.img`
	width: 350px;
	height: 350px;
`;

const ProductCount = styled.div`
	font-size: 14px;
	margin: 10px 0 0 390px;
`;

const PhotoAndDescription = styled.div`
	display: flex;
	margin-top: 40px;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 40px;

	& .description-title {
		text-align: center;
		font-size: 20px;
	}

	& .description-text {
		margin-top: 20px;
	}
`;

const ProductContainer = ({ className }) => {
	return (
		<>
			<SearchInput />
			<div className={className}>
				<Link className="change-product-button">Изменить</Link>
				<div className="flex-container">
					<div className="title">
						Товар с супер огромным названием, потому что наименование товара
						действительно может быть очень огромным и оно должно отображаться
						полностью
					</div>

					<PriceAndBuyButton>
						<div className="price">{'Стоимость'} руб.</div>
						<Button
							className="content-filter-button"
							width="140px"
							height="30px"
							fontSize="21px"
						>
							Купить
						</Button>
					</PriceAndBuyButton>

					<ProductCount>Доступно на складе - {20} шт.</ProductCount>

					<PhotoAndDescription>
						<Image src="https://pngicon.ru/file/uploads/sova-s-pismom.png" />
						<Description>
							<div className="description-title">Описание товара</div>
							<div className="description-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse at lobortis velit. Cras eget est in magna
								egestas molestie et lobortis felis. Nullam at urna purus.
								Nam blandit eu massa a dignissim. Pellentesque eu
								imperdiet arcu. In posuere pellentesque neque, ut
								tristique ipsum bibendum eu. Nulla eu velit quis ante
								sollicitudin convallis. Sed ornare leo et orci vehicula,
								ut luctus nibh egestas. Sed volutpat volutpat eros nec
								accumsan. Etiam eu ullamcorper quam. Curabitur cursus sit
								amet enim eu porttitor. Suspendisse porta ut arcu ac
								posuere.
							</div>
						</Description>
					</PhotoAndDescription>
				</div>
			</div>
		</>
	);
};

export const Product = styled(ProductContainer)`
	position: relative;
	width: 900px;
	min-height: 600px;
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

	& .title,
	.price {
		font-size: 22px;
	}
`;
