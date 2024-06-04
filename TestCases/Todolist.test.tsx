import {useDispatch} from 'react-redux';
import {Todolist} from '../Todo/Todolist';
import {render} from '@testing-library/react-native';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
  };
});

describe('Todolist Component', () => {
  const mockedDispatch = jest.fn();
  const mockedNavigation = {navigate: jest.fn()};
  beforeEach(() => {
    (jest.requireMock('react-redux') as any).useSelector.mockImplementation(
      (selector: any) =>
        selector({
          todos: [{id: 1, text: 'Hello'}],
        }),
    );
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockedDispatch);
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly in todolist', () => {
    const {getByText} = render(<Todolist navigation={mockedNavigation} />);
    const text = getByText('Todolist')
    expect(text).toBeTruthy()
  });
  it("add todo",() => {
     const {getByText,getAllByText} = render(<Todolist navigation={mockedNavigation} />)             
  })
});
