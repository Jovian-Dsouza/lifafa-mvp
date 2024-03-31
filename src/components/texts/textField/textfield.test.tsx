import {describe, expect, it, jest} from '@jest/globals';
import {render} from '@testing-library/react-native';
import React from 'react';
import {TextField} from '~components';

// Mock the Controller component from 'react-hook-form'
jest.mock('react-hook-form', () => ({
  Controller: ({render}: {render: any}) =>
    render({
      field: {onChange: jest.fn(), value: ''},
      fieldState: {error: null},
    }),
}));

describe('TextField', () => {
  it('renders correctly with default props', () => {
    const {getByPlaceholderText} = render(
      <TextField name="textField" control={{}} />,
    );
    const inputElement = getByPlaceholderText('Enter text here!');
    expect(inputElement).toBeTruthy();
  });

  it('renders correctly with custom props', () => {
    const {getByPlaceholderText, getByText} = render(
      <TextField
        name="testField"
        control={{}}
        placeholder="Custom Placeholder"
        title="Custom Title"
        titleTextSize={2}
        titleColor="red"
      />,
    );
    const inputElement = getByPlaceholderText('Custom Placeholder');
    const titleElement = getByText('Custom Title');
    expect(inputElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
  });

  it('renders title corrently wit text field', () => {
    const {getByText} = render(
      <TextField
        titleColor="black"
        name={'Text Here'}
        control={{}}
        title={'Title Here'}
      />,
    );
    const customText = getByText('Title Here');
    expect(customText).toBeTruthy();
  });

  it('renders correctly with custom props multiline', () => {
    const {getByTestId} = render(
      <TextField name="testField" control={{}} multiline />,
    );
    const inputElement = getByTestId('input');
    expect(inputElement.props.multiline).toBe(true);
  });

  it('renders correctly with custom props textAlignVertical', () => {
    const {getByTestId} = render(
      <TextField name="testField" control={{}} textAlignVertical="top" />,
    );
    const inputElement = getByTestId('input');
    expect(inputElement.props.textAlignVertical).toBe('top');
  });

  it('renders correctly with custom props keyboardType & maxLength', () => {
    const {getByTestId} = render(
      <TextField
        name="1234"
        control={{}}
        maxlength={5}
        keyboardType="numeric"
      />,
    );
    const inputElement = getByTestId('input');
    expect(inputElement.props.keyboardType).toBe('numeric');
  });
});
