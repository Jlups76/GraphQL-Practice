const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Gets tracks array for homepage"
    tracksForHome: [Track!]!
  }

  "A group of modules that teach about a specific topic"
  type Track {
    id: ID!
    "Tile of the individual learning module"
    title: String!
    "Full name of the module author"
    author: Author!
    "Main module image"
    thumbnail: String
    "The amount of time required to watch module, in minutes"
    length: Int
    "Number of lessons in a module"
    modulesCount: Int
  }

  type Author {
    id: ID!
    "Full first and last name for author"
    name: String!
    "Authors profile image and module account image"
    photo: String
  }
`;
module.exports = typeDefs;
