const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User{
        _id: ID
    
    
    }
    
    type Query {
        me: User
    } 
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
`;
module.exports = typeDefs;
