import useTodoList from '../hooks/useTodoList';
import { useSelector } from 'react-redux';
import React, { useState, useCallback } from 'react';
import type { ToDo } from '../typedef/Types';
function Button() {
  const todoList: ToDo[] = useSelector((state: ToDo[]) => state);
  const { __deleteTodoList } = useTodoList();

  const __deleteButton = (id: number) => {
    return (
      <button
        onClick={() => {
          __deleteTodoList(id);
        }}>
        삭제
      </button>
    );
  };

  return __deleteButton;
}

export const DeleteButton = (id: number) => {
  const todoList: ToDo[] = useSelector((state: ToDo[]) => state);
  const { __deleteTodoList } = useTodoList();

  return (
    <button
      onClick={() => {
        __deleteTodoList(id);
      }}>
      삭제
    </button>
  );
};

export default Button;
