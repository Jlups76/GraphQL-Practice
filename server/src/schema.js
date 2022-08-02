const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Gets tracks array for homepage"
    tracksForHome: [Track!]!
    "Gets specific track given an track's ID"
    track(id: ID!): Track
    "Gets specific module given a module's ID"
    module(id: ID!): Module
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A group of modules that teach about a specific topic"
  type Track {
    id: ID!
    "Tile of the individual learning TRACK"
    title: String!
    "Full name of the module author"
    author: Author!
    "Main module image"
    thumbnail: String
    "The amount of time required to watch module, in minutes"
    length: Int
    "Number of lessons in a module"
    modulesCount: Int
    "Description of the module groupings contents"
    description: String
    "The number of times a Track has been viewed"
    numberOfViews: Int
    "Array of individual modules in the Track"
    modules: [Module!]!
  }

  type Module {
    id: ID!
    "The title of an individual module"
    title: String!
    "The amount of time required to complete the module, in minutes"
    length: Int
    "URL containing video content of module"
    videoUrl: String
    "Written content of module"
    content: String
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
