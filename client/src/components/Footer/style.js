import styled, { css } from 'styled-components';
import { ReactComponent as Call } from 'assets/icons/call.svg';
import { ReactComponent as VISA } from 'assets/icons/visa.svg';
import { ReactComponent as Paypal } from 'assets/icons/paypal.svg';
import { ReactComponent as Union } from 'assets/icons/union.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Message } from 'assets/icons/message.svg';
import { ReactComponent as Location } from 'assets/icons/location.svg';
import { ReactComponent as MasterCard } from 'assets/icons/master-card.svg';
import { ReactComponent as AmericanExp } from 'assets/icons/american-express.svg';

const iconCommon = css`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const socialCommon = css`
    width: 40px;
    height: 30px;
`
export const VisaIcon = styled(VISA)`${socialCommon}`
export const PaypalIcon = styled(Paypal)`${socialCommon}`
export const MasterCardIcon = styled(MasterCard)`${socialCommon}`
export const AmericanExpIcon = styled(AmericanExp)`${socialCommon}`
export const CallIcon = styled(Call)`${iconCommon}`
export const MsgIcon = styled(Message)`${iconCommon}`
export const LocationIcon = styled(Location)`
    ${iconCommon}
    width: 30px;
    height: 30px;
`
export const UnionIcon = styled(Union)``
export const TwitterIcon = styled(Twitter)``
export const LinkedinIcon = styled(Linkedin)``
export const FacebookIcon = styled(Facebook)``
export const InstagramIcon = styled(Instagram)``
export const Container = styled.footer`
    background-color: var(--gray);
`
export const Top = styled.section``
export const Center = styled.section`
    background-color: #ECF6EE;
    border-top: var(--green-border);
    border-bottom: var(--green-border);
`
export const Bottom = styled.section`
    display: flex;
    padding: 25px 23px;
`
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
    width: 80%;
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
    width: 20%;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    padding: 12px 25px;
    background-color: var(--green);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`
export const CenterList = styled.ul`
    display: flex;
    align-items: center;
    padding: 20px 23px;
`
export const CenterItem = styled.li`
    width: 250px;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 22px;
    color: var(--bold-color);
    list-style-type: none;
    &:not(:first-child) {
        margin-right: 30px;
    }
`
export const BottomList = styled.ul`
    width: 280px;
`
export const BottomItem = styled.li`
    list-style-type: none;
`
export const BottomLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
export const SocialMedia = styled.ul`
    display: flex;
    align-items: center;
    margin: 30px 0;
`
export const SocialItem = styled.li`
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: var(--green-border);
    list-style-type: none;
    &:not(:last-child) {
        margin-right: 10px;
    }
`
export const Payments = styled.ul`
    display: flex;
    align-items: center;
    /* margin: 30px 0; */
`
export const PaymentItem = styled.li`
    cursor: pointer;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
        margin-right: 15px;
    }
`
export const SocialLink = styled.a``
export const CopyRight = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    color: var(--bold-color);
`