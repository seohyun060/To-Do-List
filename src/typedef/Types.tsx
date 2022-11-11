export type ToDo = {
  id: number;
  text: string;
};

export type Action = {
  type: string;
  toDoList: ToDo[];
};

export type EChange = React.ChangeEvent<HTMLInputElement>;
export type EKeyboard = React.KeyboardEvent;
