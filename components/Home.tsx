import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@gluestack-ui/themed";
import TodoList from "./TodoList";

export type Todotype = {
  id: number;
  name: string;
  complete: boolean;
};

function Home() {
  return (
    <Box bg="$" pb="$20" ml="$10">
      <Heading mb="$10">Todo List</Heading>
      <TodoList />
    </Box>
  );
}

export default Home;
