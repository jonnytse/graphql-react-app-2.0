import React from 'react';
import { useQuery, gql } from '@apollo/client';

const getUsersQuery = gql`
    {
        allUsers {
            firstName
            lastName
            email
            id
        }
    }
`

const Users = () => {
    const { loading, error, data } = useQuery(getUsersQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;    
    return data.allUsers.map(user => {
        return(
            <ul key={user.email}>
                <li>Name: {user.firstName} {user.lastName}</li>
                <li>ID: {user.id}</li>
                <li>Email: {user.email}</li>
                <li></li>
            </ul>
        );
    })    
}

export default Users;




