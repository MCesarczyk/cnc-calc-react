import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { theme } from 'theme';
import { FeedType } from 'types';
import { Language } from 'features/language/types';
import LanguageContext from 'features/language/context';
import { FeedOptionSelector } from 'components/FeedOptionSelector';

const langId: Language = 'EN';
const setLangId = jest.fn();

let feedType: FeedType;
let feedFactor: string | undefined;

const setFeedType = jest.fn();
const setFeedFactor = jest.fn();

const setup = () => {
  const component = render(
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ langId, setLangId }}>
        <FeedOptionSelector
          feedType={feedType}
          setFeedType={setFeedType}
          feedFactor={feedFactor}
          setFeedFactor={setFeedFactor}
        />
      </LanguageContext.Provider>
    </ThemeProvider>,
  );

  const radio1 = component.getByTestId('FPR-radio');
  const radio2 = component.getByTestId('FPT-radio');
  const feedPerRotation = component.getByTestId('FPR-input');
  const feedPerTooth = component.getByTestId('FPT-input');

  return { component, radio1, radio2, feedPerRotation, feedPerTooth };
};

test('Only feed per revolution radio button should be enabled initially, other option fields should be disabled', () => {
  feedType = 'FPR';
  const { radio1, radio2, feedPerRotation, feedPerTooth } = setup();

  expect(radio1).toBeChecked();
  expect(radio2).not.toBeChecked();
  expect(feedPerRotation).not.toHaveAttribute('disabled');
  expect(feedPerTooth).toHaveAttribute('disabled');
});

test('When feed per tooth is enabled initially, other option fields should be disabled also', () => {
  feedType = 'FPT';
  const { radio1, radio2, feedPerRotation, feedPerTooth } = setup();

  expect(radio1).not.toBeChecked();
  expect(radio2).toBeChecked();
  expect(feedPerRotation).toHaveAttribute('disabled');
  expect(feedPerTooth).not.toHaveAttribute('disabled');
});

test('Clicking radio buttons should cause switching between them', () => {
  const { component } = setup();

  const radio1 = component.getByTestId('FPR-radio');
  const radio2 = component.getByTestId('FPT-radio');

  fireEvent.change(radio2, { target: { checked: true } });
  fireEvent.blur(radio2);
  expect(radio1).not.toBeChecked();
  expect(radio2).toBeChecked();

  fireEvent.change(radio1, { target: { checked: true } });
  fireEvent.blur(radio1);
  expect(radio1).toBeChecked();
  expect(radio2).not.toBeChecked();
});
