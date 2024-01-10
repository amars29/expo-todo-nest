import { gql } from "graphql-tag";

export const GET_TODOS = gql`
  query GetTodos {
    findAll {
      id
      name
      complete
    }
  }
`;

export const GET_TODO_BY_ID = gql`
  query GetTodoById($id: Int!) {
    findOne(id: $id) {
      id
      name
      complete
    }
  }
`;
