import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "../components/Header";
import { BrowserRouter as Router } from 'react-router-dom';

test('Check if Header renders correctly', () => {
  const tree = render(
    <Router>
      <Header />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});