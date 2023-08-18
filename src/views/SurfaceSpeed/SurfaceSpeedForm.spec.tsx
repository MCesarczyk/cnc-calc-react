import { fireEvent, render } from '@testing-library/react';
import { theme } from 'theme';
import { testWithStyles } from 'utils/testUtils';
import SurfaceSpeedForm from 'views/SurfaceSpeed';

test('Surface cutting speed should be calculated properly', async () => {
  const { findByLabelText, findByRole, container } = render(testWithStyles(<SurfaceSpeedForm />, theme));
  expect(container).toHaveTextContent('Surface cutting speed');

  const diameterInput = await findByLabelText('D [mm]:');
  fireEvent.change(diameterInput, { target: { value: '80' } });

  const rotationsInput = await findByLabelText('nrev [rev/min]:');
  fireEvent.change(rotationsInput, { target: { value: '1250' } });

  const calculateButton = await findByRole('button', { name: 'Calculate' });
  fireEvent.click(calculateButton);

  expect(container).toHaveTextContent('314.16');
});

test('Reset button should clear all inputs', async () => {
  const { findByLabelText, findByRole, container } = render(testWithStyles(<SurfaceSpeedForm />, theme));

  const resetButton = await findByRole('button', { name: 'Reset' });
  fireEvent.click(resetButton);

  expect(container).not.toHaveTextContent('314.16');

  const diameterInput = await findByLabelText('D [mm]:');
  expect(diameterInput).toHaveValue(null);

  const rotationsInput = await findByLabelText('nrev [rev/min]:');
  expect(rotationsInput).toHaveValue(null);
});
