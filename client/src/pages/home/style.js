import styled, { css } from 'styled-components';
import BannerImg from 'assets/images/banner.svg';
import SuperSale from 'assets/images/super-sale.svg';
import { ReactComponent as DownArrow } from 'assets/icons/down-arrow.svg';

const textCommon = css`
    font-size: 70px;
    font-weight: 900;
    line-height: 70px;
    display: inline-block;
    text-transform: uppercase;
`
const sortText = css`
    cursor: pointer;
    font-size: 15px;
    line-height: 16px;
    font-weight: ${({ active }) => active ? 700 : 400};
    color: ${({ active }) => active ? "var(--green)" : "var(--bold-color)"};
`
const categoryCommon = css`
    font-size: 15px;
    line-height: 40px;
    font-weight: ${({ active }) => active ? 700 : 400};
    color: ${({ active }) => active ? 'var(--green)' : 'var(--bold - color)'}
`
export const DownArrowIcon = styled(DownArrow)`
    cursor: pointer;
    margin-left: 8px;
    transition: all 0.3s ease;
    transform: ${({ active }) => active ? 'rotate(180deg)' : ''} ;
`
export const Container = styled.div`
    width: 100%;
`
export const ImageSection = styled.div`
    width: 50%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(${BannerImg});
`
/* Banner section */

export const TextSection = styled.div`
    width: 50%;
    padding-top: 70px;
    padding-left: 45px;
`
export const Banner = styled.section`
    width: 100%;
    display: flex;
    margin-top: 12px;
    margin-bottom: 50px;
    background-color: var(--gray);
`
export const BannerText = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    display: inline-block;
    color: var(--bold-color);
    text-transform: uppercase;
`
export const BannerTitle = styled.h1`
    ${textCommon};
    color: var(--bold-color);
`
export const BannerGreen = styled.span`
    ${textCommon};
    color: var(--green);
`
export const BannerDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 48px;
    color: var(--text-color);
`
export const ShopNow = styled.button`
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: 10px 26px;
    border-radius: 6px;
    text-transform: uppercase;
    background-color: var(--green);
`
/* Catalog section */
export const CatalogSection = styled.section`
    display: flex;
    margin-bottom: 50px;
    width: 100%;
`
export const Categories = styled.aside`
    width: 25%;
    padding: 14px 24px 33px 18px;
    background-color: var(--gray);
`
export const CategoryTitle = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    color: var(--bold-color);
`
export const CategoryList = styled.ul`
    padding-left: 12px;
`
export const CategoryItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
`
export const CategoryName = styled.span`
    cursor: pointer;
    ${categoryCommon};
`
export const CategoryNumber = styled.span`
    ${categoryCommon};
`
/* Products section */
export const Products = styled.div`
    width: 75%;
    margin-left: 40px;
`
export const ProductHead = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
/* Tabs section */
export const TabsWrap = styled.div``
export const Tabs = styled.ul`
    display: flex;
`
export const TabItem = styled.li`
    list-style-type: none;
    padding-bottom: 5px;
    border-bottom: ${({ active }) => active && '2px solid var(--green)'};
    &:not(:last-child) {
        margin-right: 38px;
    }
`
export const TabName = styled.span`
    ${sortText};
`
/* Sort section */
export const Sort = styled.div`
    display: flex;
    align-items: center;
`
export const SortText = styled.span`
    ${sortText};
`
export const SizeList = styled.ul`
    padding-left: 12px;
`
export const SizeItem = styled.li`
    display: flex;
    align-items: center;
    list-style-type: none;
    justify-content: space-between;
`
export const Size = styled.span`
    ${categoryCommon};
`
export const SuperSales = styled.div`
    width: 100%;
    height: 470px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${SuperSale});
`
export const Catalog = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    gap: 40px 20px;
    grid-template-columns: repeat(3, 1fr);
`