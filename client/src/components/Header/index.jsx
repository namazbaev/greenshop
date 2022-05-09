import LogoImg from 'assets/icons/logo.svg';
import { menuList } from 'routes/components';
import { useLocation } from 'react-router-dom';
import { CART, LOGIN } from 'routes/constants';
import {
    Container, LogoSection, Logo, Menu, MenuList, MenuItem, MenuLink, Element,
    LoginBtn, LogoOut, RightSection, RightElList, RightElItem, Basket, LinkTo,
    BadgeWrap, Badge, Search, BasketWrap
} from './style';
export default () => {
    const location = useLocation();
    const active = location.pathname;
    return (
        <Container>
            <LogoSection>
                <Logo src={LogoImg} />
            </LogoSection>
            <Menu>
                <MenuList>
                    {menuList.map(({ path, title }) => (
                        <MenuItem key={path}>
                            <MenuLink to={path} active={active === path ? active : ''}>{title}</MenuLink>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            <RightSection>
                <RightElList>
                    <RightElItem>
                        <Element>
                            <Search />
                        </Element>
                    </RightElItem>
                    <RightElItem>
                        <LinkTo to={CART}>
                            <Element>
                                <BasketWrap>
                                    <Basket />
                                    <BadgeWrap>
                                        <Badge>6</Badge>
                                    </BadgeWrap>
                                </BasketWrap>
                            </Element>
                        </LinkTo>
                    </RightElItem>
                    <RightElItem>
                        <LinkTo to={LOGIN}>
                            <LoginBtn>
                                <LogoOut />
                                Login
                            </LoginBtn>
                        </LinkTo>
                    </RightElItem>
                </RightElList>
            </RightSection>
        </Container>
    )
}