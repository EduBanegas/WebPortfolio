import styled from 'styled-components';

export const StyledPhoto = styled.img`
	border-bottom: .1px solid #dc68484f;
	max-width: 100%; 
	width: 60%;
	max-height: 100%;
	object-fit: cover;
	object-position: top;
	position: absolute;
	right: 0;
	margin-top: 8em;
	z-index: 5;

	@media (max-width: 1000px) {
		bottom: -7em;
		max-width: 55%;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;
