import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Todolist} from './Todo/Todolist';
import {legacy_createStore} from 'redux';
import rootReducer from './redux/reducers';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditTodo from './Todo/EditTodo';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Todolist"
            component={Todolist}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditTodo"
            component={EditTodo}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
