import { AddItem,EditItem,DeleteItem,TodoActionTypes, Todo } from "./actiontypes";

export const addTask = (todos:Todo)  => ({
  type : AddItem,
  payload: todos
})

export const editTask = (id : number,newText:string)  => ({
type :EditItem,
payload:{id,newText}
})
export const deleteTask = (id :number )  => ({
  type : DeleteItem,
  payload : id
})
