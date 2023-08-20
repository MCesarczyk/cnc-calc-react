import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { RadioButton } from './RadioButton';
import { ChangeEvent } from 'react';

test('Radio button rendered properly', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      {/* @ts-ignore */}
      <RadioButton name={''} option={undefined} parameter={''} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      } } />
    </ThemeProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
