import React from "react";
import {
  Box,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  CheckboxLabel,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { Todotype } from "./Home";
import { useMutation } from "@apollo/client";
import { TOGGLE_TODO, REMOVE_TODO } from "../graphql/mutation";

function TodoItem({ todo, refetch }: { todo: Todotype; refetch: () => void }) {
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [removeTodo] = useMutation(REMOVE_TODO);
  const handleToggleTodo = async () => {
    try {
      const { data } = await toggleTodo({
        variables: {
          id: todo.id,
        },
      });
      // Optionally, you can refetch the list of todos after toggling one
      // This depends on your application's requirements
      refetch();
    } catch (error) {
      console.error("Error toggling todo:", error.message);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      const { data } = await removeTodo({
        variables: {
          id: todo.id,
        },
      });
      refetch();
    } catch (error) {
      console.error("Error deleting todo:", error?.message);
    }
  };
  return (
    <Box flexDirection="row" gap="$4">
      <Checkbox
        value={todo.name}
        defaultIsChecked={todo.complete}
        onChange={handleToggleTodo}
      >
        <CheckboxIndicator mr="$3">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel color="$textDark900">{todo.name}</CheckboxLabel>
      </Checkbox>
      <Button onPress={handleDeleteTodo}>
        <ButtonText>Delete</ButtonText>
      </Button>
    </Box>
  );
}

export default TodoItem;
