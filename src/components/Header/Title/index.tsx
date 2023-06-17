import { HomeLink, Headline } from './styled';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => (
  <HomeLink to="/">
    <Headline>{title}</Headline>
  </HomeLink>
);

export default Title;
