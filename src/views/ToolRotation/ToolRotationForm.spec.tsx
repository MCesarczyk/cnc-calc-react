import { fireEvent, render } from '@testing-library/react';
import { theme } from 'theme';
import { testWithStyles } from 'utils/testUtils';
import ToolRotationForm from 'views/ToolRotation';

test('Surface cutting speed should be calculated properly', async () => {
  const { findByLabelText, findByRole, container } = render(testWithStyles(<ToolRotationForm />, theme));
  expect(container).toHaveTextContent('Tool rotational speed');

  const diameterInput = await findByLabelText('D [mm]:');
  fireEvent.change(diameterInput, { target: { value: '80' } });

  const cuttingSpeedInput = await findByLabelText('Vc [m/min]:');
  fireEvent.change(cuttingSpeedInput, { target: { value: '120' } });

  const calculateButton = await findByRole('button', { name: 'Calculate' });
  fireEvent.click(calculateButton);

  expect(container).toHaveTextContent('477');
});

test('Reset button should clear all inputs', async () => {
  const { findByLabelText, findByRole, container } = render(testWithStyles(<ToolRotationForm />, theme));

  const resetButton = await findByRole('button', { name: 'Reset' });
  fireEvent.click(resetButton);

  expect(container).not.toHaveTextContent('477');

  const diameterInput = await findByLabelText('D [mm]:');
  expect(diameterInput).toHaveValue(null);

  const rotationsInput = await findByLabelText('Vc [m/min]:');
  expect(rotationsInput).toHaveValue(null);
});
