import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://api-ca-central-1.hygraph.com/v2/clga72epw2l0v01t3085nbbcm/master',
	cache: new InMemoryCache(),
});

export default client;
