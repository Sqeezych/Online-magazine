import styled from 'styled-components';

const LeftAligned = styled.div`
	margin-left: 50px;
`;

const FooterContainer = ({ className }) => {
	return (
		<div className={className}>
			<LeftAligned>
				<div className="footer-telephone">
					<a href="tel:+79991234567">+7 (999) 123-45-67</a>
				</div>
				<div className="footer-email">
					<a href="mailto:sale@prodat’bystree.com">sale@prodat’bystree.com</a>
				</div>
			</LeftAligned>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: flex-left;
	align-items: center;
	position: absolute;
	bottom: 0;
	border-top: 3px solid #8a1f1f;
	height: 120px;
	width: 100%;
	background-color: #fdf3e2;
	.footer-telephone {
		margin-bottom: 10px;
	}
`;
