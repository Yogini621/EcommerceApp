import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editTask} from '../redux/actions/Todoactions';

interface Props {
  navigation: any;
  route: any;
}
export const EditTodo: React.FC<Props> = ({navigation, route}) => {
  const {todo} = route.params;
  const [text, setText] = useState(todo.text);
  const [id, setId] = useState(todo.id);
  const dispatch = useDispatch();

  const handleEditTodo = (id: number, newText: string) => {
    const updateUser = {
      newText,
      id,
    };
    console.log(updateUser);

    dispatch(editTask(id, newText));
    navigation.navigate('Todolist', {updateUser});
  };

  return (
    <View>
      <TextInput
        placeholder="EditTodo"
        onChangeText={newtext => setText(newtext)}
        value={text}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleEditTodo(id, text)}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({
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
});
