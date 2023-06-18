import { useContext } from 'react';
import styled, { css } from 'styled-components';

import LanguageContext from 'features/language/context';
import { Language } from 'features/language/types';
import { changeLanguage, isButtonActive } from './functions';
import Image from 'next/image';

interface SwitcherButtonProps {
  language: {
    key: Language;
    flag: string;
  };
}

export const SwitcherButton = ({ language }: SwitcherButtonProps) => {
  const { langId, setLangId } = useContext(LanguageContext);

  const onLanguageChange = (key: Language) => setLangId(changeLanguage(key) as Language);

  return (
    <StyledButton
      onClick={() => onLanguageChange(language.key)}
      $active={isButtonActive(language.key, langId) ? 'active' : undefined}
    >
      <ButtonBackground alt="flag" src={language.flag} placeholder="blur" quality={10} />
      <SwitcherButtonLabel>{language.key}</SwitcherButtonLabel>
    </StyledButton>
  );
};

export const StyledButton = styled.button<{ $active?: string }>`
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 2px;
  margin: 0;
  padding: 0;
  width: 36px;
  height: 27px;

  ${({ $active }) =>
    $active === 'active' &&
    css`
      border-color: ${({ theme }) => theme.color.primaryContrast};
    `}

  &:hover {
    filter: brightness(125%);
  }

  &:active {
    filter: brightness(150%);
  }
`;

const ButtonBackground = styled(Image)`
  object-fit: fill;
  height: 30px;
  margin: 0;
  margin-top: -4px;
`;

const SwitcherButtonLabel = styled.div`
  color: ${({ theme }) => theme.color.white};
  margin-top: -27px;
  font-weight: 700;
  font-size: 18px;
`;
