import { fireEvent, render } from '@testing-library/react';
import { theme } from 'theme';
import { testWithStyles } from 'utils/testUtils';
import TappingFeedForm from 'views/TappingFeed';

test('Tapping feedrate should be calculated properly', async () => {
  const { findByLabelText, findByRole, container } = render(testWithStyles(<TappingFeedForm />, theme));
  expect(container).toHaveTextContent('Tapping feedrate');

  const rotationInput = await findByLabelText('nrev [rev/min]:');
  fireEvent.change(rotationInput, { target: { value: '477' } });

  const diameterSelect = await findByLabelText('D [mm]:');
  fireEvent.change(diameterSelect, { target: { value: '2' } });

  expect(container).toHaveTextContent('P [mm]0.4');

  const calculateButton = await findByRole('button', { name: 'Calculate' });
  fireEvent.click(calculateButton);

  expect(container).toHaveTextContent('f [mm/min]:190.8');
});

test('Reset button should clear all inputs', async () => {
  const { findByLabelText, findByRole, container, debug } = render(testWithStyles(<TappingFeedForm />, theme));

  const resetButton = await findByRole('button', { name: 'Reset' });
  fireEvent.click(resetButton);

  const rotationInput = await findByLabelText('nrev [rev/min]:');
  expect(rotationInput).toHaveValue(null);

  expect(container).not.toHaveValue('0.4');
  expect(container).not.toHaveValue('190.8');
});
