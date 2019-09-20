import styled from 'styled-components';

export const Image = styled.div`
	width: 90px;
	height: 90px;
	& > img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;
