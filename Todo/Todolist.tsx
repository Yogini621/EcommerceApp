import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {addTask, editTask, deleteTask} from '../redux/actions/Todoactions';
import { Todo } from '../redux/actions/actiontypes';

interface Props {
  navigation: any;
}

export const Todolist: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTask({id: Date.now(), text}));
      setText('');
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (todo : Todo) => {
    navigation.navigate('EditTodo',{todo})
  };

  const renderItems = ({
    item,
  }: {
    item: {id: number; text: string; newText: string};
  }) => {
    return (
      <View style={styles.listView}>
        <Text> {item.text} </Text>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Todotext}>Todolist</Text>
      <TextInput
        placeholder="Enter Your task"
        onChangeText={setText}
        value={text}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={renderItems}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Todotext: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    padding: 10,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    width: '90%',
    marginTop: '4%',
  },
  buttonText: {
    color: 'white',
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    backgroundColor: '#ffffff',
    width: '90%',
    margin: 4,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
