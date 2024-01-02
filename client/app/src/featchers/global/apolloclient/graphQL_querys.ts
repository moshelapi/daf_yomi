import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Users {
  users {
    id
    firstName
    lastName
    email
    image
    password
    latitude
    longitude
    time
    title
    city
    street
    age
  }
}

`;



