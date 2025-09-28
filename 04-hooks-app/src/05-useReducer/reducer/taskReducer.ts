import { act } from "react";
import { PokemonPage } from "../../03-examples/PokemonPage";
import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTasksInitalState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");
  if (!localStorageState)
    return {
      todos: [],
      completed: 0,
      length: 0,
      pending: 0,
    };
  //Validar mediante Zod
  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));
  if (result.error) {
    return {
      todos: [],
      completed: 0,
      length: 0,
      pending: 0,
    };
  }
  return JSON.parse(localStorageState);
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      if (action.payload.length === 0) return state;
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }
    case "DELETE_TODO":
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
        length: newTodos.length,
        completed: newTodos.filter((todo) => todo.completed).length,
        pending: newTodos.filter((todo) => !todo.completed).length,
      };
    case "TOGGLE_TODO": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload)
          return {
            ...todo,
            completed: !todo.completed,
          };
        return todo;
      });
      return {
        ...state,
        todos: newTodos,
        completed: newTodos.filter((todo) => todo.completed).length,
        pending: newTodos.filter((todo) => !todo.completed).length,
      };
    }
    default:
      return state;
  }
};
