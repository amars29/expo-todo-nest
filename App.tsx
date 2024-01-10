import {
  GluestackUIProvider,
  Text,
  Box,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  CheckboxLabel,
  FlatList,
  Heading,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useState } from "react";
import apolloClient from "./graphql/apollo-client";
import Home from "./components/Home";
import { ApolloProvider } from "@apollo/client";

type Todotype = {
  id: number;
  name: string;
  complete: boolean;
};

export default function App() {
  // const [todos, setTodos] = useState<Todotype[]>([
  //   { id: 1, name: "Buy groceries", complete: false },
  //   { id: 2, name: "Complete homework", complete: false },
  //   { id: 3, name: "Exercise", complete: false },
  // ]);

  // const toggleComplete = (id: number) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo.id === id ? { ...todo, complete: !todo.complete } : todo
  //     )
  //   );
  // };
  return (
    <ApolloProvider client={apolloClient}>
      <GluestackUIProvider config={config}>
        <Home />
      </GluestackUIProvider>
    </ApolloProvider>
  );
}
