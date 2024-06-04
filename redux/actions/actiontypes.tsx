export const AddItem = 'AddItem'
export const EditItem = 'EditItem'
export const DeleteItem = 'DeleteItem' 

export interface Todo {
    id : number;
    text : string;
}
export interface AddTodoAction {
    type : typeof AddItem
    payload:Todo
}

export interface EditItemAction {
   type :typeof EditItem
   payload : {id :number,newText:string};
}

export interface DeleteItemAction {
    type :typeof DeleteItem
    payload :number
}

export type  TodoActionTypes = 
|AddTodoAction 
| EditItemAction 
| DeleteItemAction 

export interface TodoState {
    todos : Todo[]
}