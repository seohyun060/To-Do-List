import React, { useState, useCallback } from 'react';
import '../styles/TodoItem.css';
import useTodoList from '../hooks/useTodoList';
import Button from './Button';
import type { EChange, ToDo } from '../typedef/Types';

const TodoItem = ({ id, text }: ToDo) => {
  const [value, setValue] = useState(text);
  const [insertToggle, setInsertToggle] = useState(false);
  const { __updateTodoList, __deleteTodoList } = useTodoList();

  const onChange = useCallback((e: EChange) => {
    setValue(e.target.value);
  }, []);

  const onInsertToggle = useCallback(() => {
    setInsertToggle((prev) => !prev);
  }, []);

  return (
    <div className='itemBox'>
      <div className='delete'>
        <div>
          {!insertToggle ? (
            text
          ) : (
            <input value={value} onChange={onChange}></input>
          )}
        </div>
        <button
          onClick={() => {
            console.log(id);
            __deleteTodoList(id);
          }}>
          삭제
        </button>
        {!insertToggle ? (
          <div>
            {
              <button className='Ubutton' onClick={onInsertToggle}>
                수정
              </button>
            }
          </div>
        ) : (
          <div>
            <button
              className='Cbutton'
              onClick={() => {
                __updateTodoList(id, value);
                onInsertToggle();
              }}>
              변경
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
