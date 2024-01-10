import React, { useRef, useState } from "react";
import { Box, Text, VStack } from "@gluestack-ui/themed";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Todotype } from "./Home";
import { GET_TODOS } from "../graphql/queries";

function TodoList() {
  const { loading, error, data, refetch } = useQuery(GET_TODOS);

  const handleRefetch = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error("Error refetching todos:", error.message);
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <Box>
      <VStack space="md">
        {data.findAll.map((todo: Todotype) => (
          <TodoItem todo={todo} key={todo.id} refetch={handleRefetch} />
        ))}
      </VStack>
      <AddTodo refetchTodos={handleRefetch} />
    </Box>
  );
}

export default TodoList;
