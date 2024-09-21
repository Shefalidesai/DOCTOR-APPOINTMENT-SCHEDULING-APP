const { gql } = require('apollo-server');

const typeDefs = gql`
  type Therapist {
    id: ID!
    name: String!
    experience: String!
    price: String!
    expertise: [String!]!
    languages: [String!]!
    sessionMode: [String!]!
    location: String!
    availableSlots: [String!]!
    profileImage: String! # Image URL
  }

  type Query {
    therapists: [Therapist!]!
    therapist(id: ID!): Therapist
  }

  type Mutation {
    addTherapist(
      name: String!,
      experience: String!,
      price: String!,
      expertise: [String!]!,
      languages: [String!]!,
      sessionMode: [String!]!,
      location: String!,
      availableSlots: [String!]!,
      profileImage: String!
    ): Therapist!
  }
`;

module.exports = typeDefs;
