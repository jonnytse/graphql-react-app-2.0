import React, { Component } from 'react';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Users from '../../components/Users';

const client = new ApolloClient({
  uri: 'https://fakerql.nplan.io/graphql',
  cache: new InMemoryCache()
});

client.query({
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

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>React-GraphQL App</h1>
          <Users />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;



