import { useState } from 'react';
import LogoImg from 'assets/icons/logo.svg';
import { menuList } from 'routes/components';
import { useLocation } from 'react-router-dom';
import { Container, LogoSection, Logo, Menu, MenuList, MenuItem, MenuLink, LoginBtn, LogoOut, RightSection } from './style';
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
                <LoginBtn>
                    <LogoOut />
                    Login
                </LoginBtn>
            </RightSection>
        </Container>
    )
}