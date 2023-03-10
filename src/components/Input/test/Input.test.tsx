import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../Input';

describe('Running Test for Input', () => {
  it('Check placeholder in Input', () => {
    const placeholder = 'Hello UI Component!';
    render(<Input placeholder={placeholder} />);
    expect(screen.getByPlaceholderText('Hello UI Component!')).toHaveAttribute(
      'placeholder',
      placeholder
    );
  });
});
