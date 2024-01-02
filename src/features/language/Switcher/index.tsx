import languages from 'assets/fixtures/languages';
import { Language } from 'features/language/types';
import Button from './Button';
import { SwitcherWrapper } from './styled';

const LanguageSwitcher = () => (
  <SwitcherWrapper>
    {Object.values(languages).map((language) => (
      <Button key={language.key} language={{ key: language.key as Language, flag: language.flag }} />
    ))}
  </SwitcherWrapper>
);

export default LanguageSwitcher;
