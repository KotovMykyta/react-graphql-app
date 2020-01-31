import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import File from './File';


const client = new ApolloClient({
  uri: "https://snowtooth.moonhighway.com/"//graphql endpoint
});


function App () {
  return (
  <ApolloProvider client={client}>
    <div>
      <File />
    </div>
  </ApolloProvider>)
}

export default App;
