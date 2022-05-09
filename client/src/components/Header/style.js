import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';

export const LogoOut = styled(LogoutIcon)`
    margin-right: 4px;
`
export const Container = styled.div`
    width: 100%;
    height: 60px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`
export const Logo = styled.img`
    width: 100%;
    object-fit: cover;
`
export const MenuList = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
`
export const MenuItem = styled.li`
    list-style-type: none;
    &:not(:last-child){
        margin-right: 50px;
    }
`
export const MenuLink = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--bold-color);
    padding-bottom: 17px;
    text-transform: capitalize;
    font-weight: ${({ active }) => active ? 700 : 400};
    border-bottom: ${({ active }) => active ? '3px solid var(--green)' : ''};
`
export const LogoSection = styled.div``
export const Menu = styled.nav`

`
export const RightSection = styled.div`

`
export const LoginBtn = styled.button`
    display: flex;
    align-items: center;
    color: #ffffff;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 7px 17px;
    border: none;
    cursor: pointer;
    background-color: var(--green);
    &:active {
        background-color: #38A04C;
    }
`