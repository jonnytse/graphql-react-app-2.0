import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

function App() {
  return (
    <div className="App">
      <h1>GraphQL React App</h1>
    </div>
  );
}

const client = new ApolloClient({
  uri: 'https://fakerql.nplan.io/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      {
        allUsers{
          firstName
          lastName
          id
          email
        }
      }  
    `
  })
  .then(result => console.log(result));

export default App;
