import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { theme } from 'theme';
import { MobileNavWrapper } from 'features/navigation/Navigation';
import { HomeTitle } from '.';
import { testWithStylesAndRouter } from 'utils/testUtils';

test('Home component rendered properly', () => {
  const component = renderer.create(
    testWithStylesAndRouter(
      <>
        <HomeTitle />
        <MobileNavWrapper />
      </>,
      theme,
    ),
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
