import styled from "styled-components";

export const Content = styled.div`
    height: 100%;
    padding: 0 10px;
    margin-bottom: 20px;
    border: 3px solid var(--gray);
`
export const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
`
export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: var(--gray); */
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.3s;
    &:hover {
        transform: scale(1.03);
    }
`
export const Footer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Title = styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin-top: 12px;
    color: var(--bold-color);
`
export const Price = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 10px;
    color: var(--green);
`