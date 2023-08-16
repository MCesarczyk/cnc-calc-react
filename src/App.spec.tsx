import { fireEvent, render } from '@testing-library/react';

import { testWithStyles } from 'utils/testUtils';
import { theme } from 'theme';
import App from 'App';

test('Surface cutting speed form should be active after click proper navigation button', async () => {
  const { getByText, findAllByRole, findByText, findAllByText, rerender } = render(testWithStyles(<App />, theme));
  const initialPrompt = getByText('Choose an option, please.');
  expect(initialPrompt).toBeInTheDocument();

  const surfaceCuttingSpeedButtons = await findAllByRole('link', { name: 'Surface cutting speed' });
  // three types of navigation buttons expected
  expect(surfaceCuttingSpeedButtons).toHaveLength(3);
  fireEvent.click(surfaceCuttingSpeedButtons[0]);
  rerender(testWithStyles(<App />, theme));
  await findByText('Calculate');
  expect(await findAllByText('Surface cutting speed')).toHaveLength(3); // nav + form label
  expect(await findAllByText('Tool rotational speed')).toHaveLength(2);
  expect(await findAllByText('Linear feedrate')).toHaveLength(2);
  expect(await findAllByText('Tapping feedrate')).toHaveLength(2);
});

test('Tool rotational speed form should be active after choose proper navigation button', async () => {
  const { findAllByRole, findByText, findAllByText, rerender } = render(testWithStyles(<App />, theme));

  const toolRotationalSpeedButtons = await findAllByRole('link', { name: 'Tool rotational speed' });
  // two types of navigation buttons expected
  expect(toolRotationalSpeedButtons).toHaveLength(2);
  fireEvent.click(toolRotationalSpeedButtons[0]);
  rerender(testWithStyles(<App />, theme));
  await findByText('Calculate');
  expect(await findAllByText('Surface cutting speed')).toHaveLength(2);
  expect(await findAllByText('Tool rotational speed')).toHaveLength(3); // currently active
  expect(await findAllByText('Linear feedrate')).toHaveLength(2);
  expect(await findAllByText('Tapping feedrate')).toHaveLength(2);
});

test('Linear feedrate form should be active after choose proper navigation button', async () => {
  const { findAllByRole, findByText, findAllByText, rerender, debug } = render(testWithStyles(<App />, theme));

  const linearFeedrateButtons = await findAllByRole('link', { name: 'Linear feedrate' });
  // two types of navigation buttons expected
  expect(linearFeedrateButtons).toHaveLength(2);
  fireEvent.click(linearFeedrateButtons[0]);
  rerender(testWithStyles(<App />, theme));
  await findByText('Calculate');
  expect(await findAllByText('Surface cutting speed')).toHaveLength(2);
  expect(await findAllByText('Tool rotational speed')).toHaveLength(2);
  expect(await findAllByText('Linear feedrate')).toHaveLength(3); // currently active
  expect(await findAllByText('Tapping feedrate')).toHaveLength(2);
});

test('Tapping feedrate form should be active after choose proper navigation button', async () => {
  const { findAllByRole, findByText, findAllByText, rerender, debug } = render(testWithStyles(<App />, theme));

  const tappingFeedrateButtons = await findAllByRole('link', { name: 'Tapping feedrate' });
  // two types of navigation buttons expected
  expect(tappingFeedrateButtons).toHaveLength(2);
  fireEvent.click(tappingFeedrateButtons[0]);
  rerender(testWithStyles(<App />, theme));
  await findByText('Calculate');
  expect(await findAllByText('Surface cutting speed')).toHaveLength(2);
  expect(await findAllByText('Tool rotational speed')).toHaveLength(2);
  expect(await findAllByText('Linear feedrate')).toHaveLength(2);
  expect(await findAllByText('Tapping feedrate')).toHaveLength(3); // currently active
});

test('Main menu should be active after click on main header', async () => {
  const { findByRole, findByText, rerender } = render(testWithStyles(<App />, theme));

  const mainMenuButton = await findByRole('link', { name: 'Cutting parameters calculator' });
  expect(mainMenuButton).toBeInTheDocument();
  fireEvent.click(mainMenuButton);
  rerender(testWithStyles(<App />, theme));
  await findByText('Choose an option, please.');
});

test('Language switcher button marked "PL" should change language to polish', async () => {
  const { findByRole, findByText, findAllByText, rerender, debug } = render(testWithStyles(<App />, theme));

  const polishButton = await findByRole('button', { name: 'PL' });
  expect(polishButton).toBeInTheDocument();
  fireEvent.click(polishButton);
  await findByText('Kalkulator parametrów skrawania');
  expect(await findAllByText('Liniowa prędkość skrawania')).toHaveLength(3);
  expect(await findAllByText('Prędkość obrotowa narzędzia')).toHaveLength(3);
  expect(await findAllByText('Wielkość posuwu liniowego')).toHaveLength(3);
  expect(await findAllByText('Wielkość posuwu przy gwintowaniu')).toHaveLength(3);
});
