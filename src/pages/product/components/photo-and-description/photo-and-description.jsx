import styled from 'styled-components';

const Image = styled.img`
	width: 350px;
	height: 350px;
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

const PhotoAndDescriptionContainer = ({ className, img, description }) => {
	return (
		<div className={className}>
			<Image src={img} />
			<Description>
				<div className="description-title">Описание товара</div>
				<div className="description-text">{description}</div>
			</Description>
		</div>
	);
};

export const PhotoAndDescription = styled(PhotoAndDescriptionContainer)`
	display: flex;
	margin-top: 40px;
`;
