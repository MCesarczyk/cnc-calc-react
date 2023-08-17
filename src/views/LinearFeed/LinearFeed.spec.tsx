import { fireEvent, render } from '@testing-library/react';
import { theme } from 'theme';
import { testWithStyles } from 'utils/testUtils';
import LinearFeedForm from 'views/LinearFeed';

test('Feed per rotation should be calculated properly', async () => {
  const { findByLabelText, findByRole, findByTestId, container } = render(testWithStyles(<LinearFeedForm />, theme));
  expect(container).toHaveTextContent('Linear feedrate');

  const rotationsInput = await findByLabelText('nrev [rev/min]:');
  fireEvent.change(rotationsInput, { target: { value: '477' } });

  const feedPerRotationsInput = await findByTestId('FPR-input');
  fireEvent.change(feedPerRotationsInput, { target: { value: '0.12' } });

  const calculateButton = await findByRole('button', { name: 'Calculate' });
  fireEvent.click(calculateButton);

  expect(container).toHaveTextContent('57');
});

test('Feed per tooth should be calculated properly', async () => {
  const { findByLabelText, findByRole, findByTestId, container } = render(testWithStyles(<LinearFeedForm />, theme));

  const rotationsInput = await findByLabelText('nrev [rev/min]:');
  fireEvent.change(rotationsInput, { target: { value: '477' } });

  const feedPerToothOption = await findByLabelText('ft [mm]:');
  fireEvent.click(feedPerToothOption);

  const feedPerToothInput = await findByTestId('FPT-input');
  fireEvent.change(feedPerToothInput, { target: { value: '0.11' } });

  const toothNumberInput = await findByLabelText('t:');
  fireEvent.change(toothNumberInput, { target: { value: '7' } });

  const calculateButton = await findByRole('button', { name: 'Calculate' });
  fireEvent.click(calculateButton);

  expect(container).toHaveTextContent('367');
});

test('Reset button should clear all inputs', async () => {
  const { findByLabelText, findByRole, findByTestId, container } = render(testWithStyles(<LinearFeedForm />, theme));

  const resetButton = await findByRole('button', { name: 'Reset' });
  fireEvent.click(resetButton);

  expect(container).not.toHaveTextContent('57');
  expect(container).not.toHaveTextContent('367');

  const rotationsInput = await findByLabelText('nrev [rev/min]:');
  expect(rotationsInput).toHaveValue(null);

  const feedPerRotationOption = await findByLabelText('fr [mm/rev]:');
  expect(feedPerRotationOption).toBeChecked();

  const feedPerRotationsInput = await findByTestId('FPR-input');
  expect(feedPerRotationsInput).toHaveValue(null);

  const feedPerToothOption = await findByLabelText('ft [mm]:');
  expect(feedPerToothOption).not.toBeChecked();

  const feedPerToothInput = await findByTestId('FPR-input');
  expect(feedPerToothInput).toHaveValue(null);

  const toothNumberInput = await findByLabelText('t:');
  expect(toothNumberInput).toHaveValue(null);
});
