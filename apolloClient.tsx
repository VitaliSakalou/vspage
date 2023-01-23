import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://api-us-west-2.hygraph.com/v2/cld2pfbzm16rw01ujdqbv15su/master',
	cache: new InMemoryCache(),
});

export default client;
