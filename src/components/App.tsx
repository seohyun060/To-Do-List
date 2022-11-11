import '../styles/App.css';
import React, { useState, useCallback, useEffect } from 'react';
import TodoItem from './ToDoItem';
import { useSelector } from 'react-redux';
import useTodoList from '../hooks/useTodoList';
import type { ToDo, EChange, EKeyboard } from '../typedef/Types';

function App() {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const todoList: ToDo[] = useSelector((state: ToDo[]) => state);
  const tdl = window.localStorage.getItem('TDL');
  let tdlObject: ToDo[];
  if (tdl !== null) {
    tdlObject = JSON.parse(tdl);
  }
  const { __addTodoList } = useTodoList();

  const onChange = useCallback((e: EChange) => {
    setValue(e.target.value);
  }, []);

  const onSearch = useCallback((e: EChange) => {
    console.log(e);
    setSearch(e.target.value);
  }, []);

  const onKeyPress = (e: EKeyboard) => {
    if (e.key === 'Enter') {
      if (value !== '') {
        __addTodoList(value);
        setValue('');
      }
    }
  };

  const AddForm = () => {
    return (
      <div className='addButton'>
        <input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}></input>
        <button
          onClick={() => {
            __addTodoList(value);
            setValue('');
          }}>
          추가
        </button>
      </div>
    );
  };

  const SearchForm = () => {
    return (
      <>
        <input
          className='searchB'
          value={search}
          placeholder='검색'
          onChange={onSearch}
        />
      </>
    );
  };

  const ToDoForm = () => {
    return (
      <>
        <h1>To-do List</h1>
        <div>
          {tdlObject
            .filter((todo) => todo.text.indexOf(search) !== -1)
            .map((todo) => (
              <TodoItem text={todo.text} key={todo.id} id={todo.id} />
            ))}
        </div>
      </>
    );
  };

  return { AddForm, SearchForm, ToDoForm };
  /* <div className='app'>
        <div className='addButton'>
          <input
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}></input>
          <button
            onClick={() => {
              __addTodoList(value);
              setValue('');
            }}>
            추가
          </button>
        </div>
        <input
          className='searchB'
          value={search}
          placeholder='검색'
          onChange={onSearch}
        />
        <h1>To-do List</h1>
        <div>
          {todoList
            .filter((todo) => todo.text.indexOf(search) !== -1)
            .map((todo) => (
              <TodoItem text={todo.text} key={todo.id} id={todo.id} />
            ))}
        </div>*/
}

export default App;
