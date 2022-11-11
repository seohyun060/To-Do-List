import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../store/store';
import type { ToDo } from '../typedef/Types';

function useTodoList() {
  const dispatch = useDispatch();
  // const toDoList2: ToDo[] = useSelector((state: ToDo[]) => state);
  useSelector((state: ToDo[]) => state);
  const tdl = window.localStorage.getItem('TDL');
  let toDoList: ToDo[];
  if (tdl !== null) {
    toDoList = JSON.parse(tdl);
  }
  const __updateTodoList = (id: number, value: string) => {
    const arrString = JSON.stringify(
      toDoList.map((toDo) =>
        toDo.id === id ? { ...toDo, text: value } : toDo,
      ),
    );
    window.localStorage.setItem('TDL', arrString);
    dispatch(
      actionCreators.updateToDo(
        toDoList.map((toDo) =>
          toDo.id === id ? { ...toDo, text: value } : toDo,
        ),
      ),
    );
  };

  const __deleteTodoList = (id: number) => {
    const arrString = JSON.stringify(toDoList.filter((toDo) => toDo.id !== id));

    // const arrString = JSON.stringify(toDoList);
    window.localStorage.setItem('TDL', arrString);
    dispatch(
      // actionCreators.deleteToDo(toDoList.filter((toDo) => toDo.id !== id)),
      actionCreators.deleteToDo([]),
    );
  };

  const __addTodoList = (text: string) => {
    const arrString = JSON.stringify([
      { id: Date.now(), text: text },
      ...toDoList,
    ]);
    window.localStorage.setItem('TDL', arrString);
    dispatch(
      actionCreators.addToDo([{ id: Date.now(), text: text }, ...toDoList]),
    );
  };

  return {
    // todoList: toDoList,
    __updateTodoList,
    __deleteTodoList,
    __addTodoList,
  };
}

export default useTodoList;
