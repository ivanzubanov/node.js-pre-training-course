import { Todo } from "./types";

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  return [...state, todo];
}

export function updateTodo(
  state: Todo[],
  id: number,
  update: Partial<Omit<Todo, "id" | "createdAt">>,
): Todo[] {
  let hasTodo = state.some((item) => item.id === id);
  if (!hasTodo) {
    throw new Error("The element with such id is missing");
  }
  return state.map((item) => {
    if (item.id === id) {
      return { ...item, ...update };
    } else {
      return item;
    }
  });
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  let hasTodo = state.some((item) => item.id === id);
  if (!hasTodo) {
    throw new Error("The element with such id is missing");
  }
  return state.filter((item) => {
    return item.id !== id;
  });
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  return state.find((item) => item.id === id);
}
