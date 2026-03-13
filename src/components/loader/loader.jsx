import styled from 'styled-components';

const LoaderContainer = ({ className }) => <div className={className}></div>;

export const Loader = styled(LoaderContainer)`
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	animation: spin 0.6s linear infinite;

	width: 50px;
	height: 50px;

	border: 2px solid #000;
	border-top-color: white;
	border-radius: 50%;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
