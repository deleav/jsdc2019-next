import styled from 'styled-components';
import HyperLink from './Link';
import { LINKS } from '../constant';
import Img from './Img';
import { assetPrefix } from '~/constant/globalConfig';

const linksWithPrefix = links => links.map(l => ({
  ...l,
  href: `${assetPrefix}${l.href}`,
}));

const Nav = () => {
  return (
    <Main>
      <Logo href='/'>
        <Img src='/static/images/logo/logo.svg' width='100'/>
      </Logo>
      <LinkList>
        {linksWithPrefix(LINKS).map((link, i) => (
          <HyperLink key={i} href={link.href}>
            {link.name}
          </HyperLink>
        ))}
      </LinkList>
    </Main>
  );
};

export default Nav;

const Main = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    min-height: 50px;
    height: 54px;
    padding: 0px 15px;
    padding-top: 5px;
    color: ${props => props.theme.colors.white};
`;

const LinkList = styled.div`
    display: flex;
    margin-left: 22px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
