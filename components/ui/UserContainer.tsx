import styled from 'styled-components';

const UserContainer = styled.div`
	display: grid;
	grid-gap: 1rem;

	@media (min-width: 500px) {
		grid-template-columns: 300px 1fr;
		grid-gap: 2rem;
	}

	img {
		border: 3px solid #333 !important;
		border-radius: 20px;
	}
`;

export default UserContainer;
