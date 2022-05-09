import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as BasketIcon } from 'assets/icons/basket.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

const iconCommon = css`
    cursor: pointer;
`
const displayCommon = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
export const LogoOut = styled(LogoutIcon)`
    ${iconCommon}
    margin-right: 4px;
`
export const LinkTo = styled(Link)`
    text-decoration: none;
`
export const Basket = styled(BasketIcon)`
    ${iconCommon}
`
export const Search = styled(SearchIcon)`
    ${iconCommon}
`
export const BasketWrap = styled.div`
    position: relative;
`
export const BadgeWrap = styled.span`
    ${displayCommon};
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    right: -5px;
    width: 16px;
    border-radius: 50%;
    background-color: #fff;
`
export const Badge = styled.button`
    ${displayCommon};
    color: #fff;
    width: 12px;
    height: 12px;
    font-size: 10px;
    font-weight: 500;
    border: none;
    line-height: 13px;
    border-radius: 50%;
    background-color: var(--green);
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
export const Menu = styled.nav``
export const RightSection = styled.div``
export const RightElList = styled.ul`
    display: flex;
    align-items: center;
`
export const RightElItem = styled.li`
    list-style-type: none;
    &:not(:last-child){
        margin-right: 30px;
    }
`
export const Element = styled.span`
    display: inline-block;
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