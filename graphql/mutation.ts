import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(createTodoInput: $createTodoInput) {
      id
      name
      complete
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      name
      complete
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id) {
      message
    }
  }
`;
