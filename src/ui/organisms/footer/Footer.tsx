import styled from 'styled-components';
import { Link } from 'ui/atoms/link';

interface FooterProps {
  date: number;
  url: string;
  label: string;
}

export const Footer = ({ date, url, label }: FooterProps) => (
  <FooterWrapper>
    <FooterContent>
      Copyright &copy; {date} by&nbsp;
      <Link href={url} target="_blank" rel="noreferrer noopener">
        {label}
      </Link>
    </FooterContent>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  text-align: center;
  margin: 0;
`;

const FooterContent = styled.p`
  color: ${({ theme }) => theme.color.primary};
  padding: 0 25px;
  font-size: 14px;
`;
