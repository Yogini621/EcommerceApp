/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
  };
});
jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(),
  };
});
it('renders correctly', () => {
  renderer.create(<App />);
});
