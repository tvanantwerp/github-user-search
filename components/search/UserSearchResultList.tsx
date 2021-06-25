import styled from 'styled-components';

import UserSearchResult from 'components/search/UserSearchResult';

const StyledList = styled.ol`
	display: grid;
	grid-gap: 1rem;
	grid-template: auto / repeat(auto-fit, minmax(300px, 1fr));
	margin: 0;
	padding: 0;
`;

const UserSearchResultList = ({ nodes }: any): JSX.Element => {
	return (
		<StyledList>
			{nodes.map(({ node }: any) => {
				return (
					<UserSearchResult
						key={node.id}
						avatar={node.avatarUrl}
						createdAt={node.createdAt}
						name={node.name}
						username={node.login}
						id={node.id}
						type={node.__typename}
					/>
				);
			})}
		</StyledList>
	);
};

export default UserSearchResultList;
