import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      age
      city
      email
      firstName
      latitude
      lastName
      id
      longitude
      password
      street
      time
      title
    }
  }
`;

export const CREATE_USER = gql`
mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    age
    city
    email
    firstName
    id
    lastName
    latitude
    longitude
    password
    street
    time
    title
  }
}
`;





