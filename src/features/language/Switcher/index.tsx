import languages from 'assets/fixtures/languages';
import Button from './Button';
import { SwitcherWrapper } from './styled';
import { Language } from '../types';

const LanguageSwitcher = () => (
  <SwitcherWrapper>
    {Object.values(languages).map((language) => (
      <Button key={language.key} language={language as { key: Language; flag: string }} />
    ))}
  </SwitcherWrapper>
);

export default LanguageSwitcher;
