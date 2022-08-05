import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import HomePage from '../components/Home';

test('Check if Header renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});