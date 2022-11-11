import React, { useState, useCallback } from 'react';
import TodoItem from '../../components/ToDoItem';
import { useSelector } from 'react-redux';
import useTodoList from '../../hooks/useTodoList';
import App from '../../components/App';

const Home = () => {
  const { AddForm, SearchForm, ToDoForm } = App();
  return (
    <div>
      {AddForm()}
      {SearchForm()}
      {ToDoForm()}
    </div>
  );
};

export default Home;
