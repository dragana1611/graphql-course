export const typeDefs = `#graphql

type Game {
id: ID! 
title:String!
platform: [String!]!
}

type Review{
id: ID! 
rating:Int!
content: String!
}

type Author {
id: ID! 
 name: String!
 verified: Boolean
}

type Query {
reviews: [Review]
 games: [Game]
 author: [Author]
}
 `;

//int, float, string, boolean, ID //!-- it's not allowed to be null-- required
