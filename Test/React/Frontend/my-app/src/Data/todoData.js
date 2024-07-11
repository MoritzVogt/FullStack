import { v4 as uuidv4 } from "uuid";

export const initialTodos = [
  {
    id: uuidv4(),
    task: "Lernen",
    done: false,
  },
  {
    id: uuidv4(),
    task: "Einkaufen",
    done: false,
    
  },
  {
    id: uuidv4(),
    task: "Putzen",
    done: false,
    
  },
];