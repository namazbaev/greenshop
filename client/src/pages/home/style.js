import styled, { css } from 'styled-components';
import BannerImg from 'assets/images/banner.svg';

const textCommon = css`
    font-size: 70px;
    font-weight: 900;
    line-height: 70px;
    display: inline-block;
    text-transform: uppercase;
`
const categoryCommon = css`
    font-size: 15px;
    font-weight: ${({ active }) => active ? 700 : 400};
    line-height: 40px;
    color: ${({ active }) => active ? 'var(--green)' : 'var(--bold - color)'}
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
export const TextSection = styled.div`
    width: 50%;
    padding-top: 70px;
    padding-left: 45px;
`
export const Banner = styled.section`
    width: 100%;
    display: flex;
    background-color: var(--gray);
    margin-bottom: 50px;
`
export const BannerText = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 20px;
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
export const CatalogSection = styled.section`
    display: flex;
    margin-bottom: 50px;
`
export const Categories = styled.aside`
    width: 25%;
    padding: 14px 24px 33px 18px;
    background-color: var(--gray);
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
export const Products = styled.div`
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
export const CategoryTitle = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    color: var(--bold-color);
`