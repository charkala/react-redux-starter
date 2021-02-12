import React from 'react';
import { render } from '@testing-library/react';

function Button(props) {
  return <button>Test Button</button>;
}

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });
});
