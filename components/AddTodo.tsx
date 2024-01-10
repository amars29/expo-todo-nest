import React, { useRef, useState } from "react";
import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import axios from "axios";
import { CREATE_TODO } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function AddTodo({ refetchTodos }: { refetchTodos: () => void }) {
  const todoNameRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const [createTodo] = useMutation(CREATE_TODO);

  const handleAddTodo = async () => {
    const todoName = todoNameRef?.current?.value;

    if (!todoName) {
      return;
    }

    try {
      const { data } = await createTodo({
        variables: {
          createTodoInput: {
            name: todoName,
          },
        },
      });
      refetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error?.message);
    }
  };

  return (
    <HStack mt="$10" space="md">
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        {/* @ts-ignore */}
        <InputField placeholder="Enter Todo" ref={todoNameRef} />
      </Input>

      <Button alignSelf="flex-start" onPress={handleAddTodo}>
        <ButtonText>Add Todo</ButtonText>
      </Button>
    </HStack>
  );
}

export default AddTodo;
