import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddItem,
  EditItem,
  DeleteItem,
  TodoActionTypes,
  TodoState,
} from '../actions/actiontypes';

const initialState: TodoState = {
  todos: [],
};

export const Todoreducers = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case AddItem:
      return {
        ...state,todos: [...state.todos ,action.payload]
      };
    case EditItem:
      const EditTask = [
        ...state.todos.map(task =>
          task.id === action.payload.id
            ? {...task, text: action.payload.newText}
            : task,
        ),
      ];
      return {
        ...state,
        todos: EditTask,
      };
    case DeleteItem:
      const updatedTasks = [
        ...state.todos.filter(task => task.id !== action.payload),
      ];
      return {
        ...state,
        todos: updatedTasks,
      };

    default:
      return state;
  }
};
export default Todoreducers;
