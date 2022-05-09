import styled from 'styled-components';

export const Container = styled.footer`
    background-color: var(--gray);
`
export const Top = styled.section``
export const Center = styled.section``
export const Bottom = styled.section``
export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 25px 23px;
`
export const Item = styled.li`
    min-width: 250px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    &:not(:last-child) {
        padding-right: 35px;
        margin-right: 30px;
    }
    border-right: ${({ borderRight }) => !borderRight || '1px solid rgba(70, 163, 88, 0.1)'};
`
export const Image = styled.img`
    height: 90px;
    margin-bottom: 15px;
`
export const Title = styled.h3`
    font-size: 17px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 17px;
    color: var(--bold-color);
`
export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-color);
`
export const Email = styled.div`
    width: 100%;
    height: 40px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
`
export const EmailInput = styled.input`
    width: 75%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: var(--bold-color);
    padding: 12px;
    border-radius: 6px;
    &::placeholder {
        color: #ACACAC;
        text-transform: lowercase;
    }
`
export const JoinButton = styled.button`
    width: 25%;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    padding: 12px 25px;
    background-color: var(--green);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`