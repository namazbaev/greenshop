import {
    Container, Top, Center, Bottom, List, Item, Image,
    Title, Description, Email, EmailInput, JoinButton,
    CenterList, CenterItem, CallIcon, MsgIcon, LocationIcon,
    BottomList, BottomItem, BottomLink, SocialMedia, SocialItem,
    SocialLink, FacebookIcon, LinkedinIcon, InstagramIcon, TwitterIcon,
    UnionIcon, CopyRight, VisaIcon, PaypalIcon, MasterCardIcon, AmericanExpIcon,
    Payments, PaymentItem
} from './style';
import LogoImg from 'assets/icons/logo.svg';
import Flower1 from 'assets/icons/flower-1.svg';
import Flower2 from 'assets/icons/flower-2.svg';
import Flower3 from 'assets/icons/flower-3.svg';
import { Logo, LogoSection } from 'components/Header/style';
export default () => (
    <>
        <Container>
            <Top>
                <List>
                    <Item borderRight="true">
                        <Image src={Flower1} />
                        <Title>
                            Garden Care
                        </Title>
                        <Description>
                            We are an online plant shop offering a wide range of cheap and trendy plants.
                        </Description>
                    </Item>
                    <Item borderRight="true">
                        <Image src={Flower2} />
                        <Title>
                            Plant Renovation
                        </Title>
                        <Description>
                            We are an online plant shop offering a wide range of cheap and trendy plants.
                        </Description>
                    </Item>
                    <Item>
                        <Image src={Flower3} />
                        <Title>
                            Watering Graden
                        </Title>
                        <Description>
                            We are an online plant shop offering a wide range of cheap and trendy plants.
                        </Description>
                    </Item>
                    <Item>
                        <Title>
                            Would you like to join newsletters?
                        </Title>
                        <Email>
                            <EmailInput type="email" placeholder="enter your email address..." />
                            <JoinButton>Join</JoinButton>
                        </Email>
                        <Description>
                            We usually post offers and challenges in newsletter. We???re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green) house to yours!
                        </Description>
                    </Item>
                </List>
            </Top>
            <Center>
                <CenterList>
                    <CenterItem>
                        <LogoSection>
                            <Logo src={LogoImg} alt="logo" />
                        </LogoSection>
                    </CenterItem>
                    <CenterItem>
                        <LocationIcon />
                        70 West Buckingham Ave.
                        Farmingdale, NY 11735
                    </CenterItem>
                    <CenterItem>
                        <MsgIcon />
                        contact@greenshop.com
                    </CenterItem>
                    <CenterItem>
                        <CallIcon />
                        +88 01911 717 490
                    </CenterItem>
                </CenterList>
            </Center>
            <Bottom>
                <BottomList>
                    <Title>My Account</Title>
                    <BottomItem>
                        <BottomLink>
                            My Account
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Our stores
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Contact us
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Career
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Specials
                        </BottomLink>
                    </BottomItem>
                </BottomList>
                <BottomList>
                    <Title>Help & Guide</Title>
                    <BottomItem>
                        <BottomLink>
                            Help Center
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            How to Buy
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Shipping & Delivery
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Product Policy
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            How to Return
                        </BottomLink>
                    </BottomItem>
                </BottomList>
                <BottomList>
                    <Title>Categories</Title>
                    <BottomItem>
                        <BottomLink>
                            House Plants
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Potter Plants
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Seeds
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Small Plants
                        </BottomLink>
                    </BottomItem>
                    <BottomItem>
                        <BottomLink>
                            Accessories
                        </BottomLink>
                    </BottomItem>
                </BottomList>
                <BottomList>
                    <Title>Social Media</Title>
                    <SocialMedia>
                        <SocialItem social>
                            <SocialLink href="https://www.facebook.com" target="_blank">
                                <FacebookIcon />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem social>
                            <SocialLink href="https://instagram.com" target="_blank">
                                <InstagramIcon />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem social>
                            <SocialLink href="https://twitter.com" target="_blank">
                                <TwitterIcon />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem social>
                            <SocialLink href="https://www.linkedin.com" target="_blank">
                                <LinkedinIcon />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem social>
                            <SocialLink href="http://www.unionsocial.ca" target="_blank">
                                <UnionIcon />
                            </SocialLink>
                        </SocialItem>
                    </SocialMedia>
                    <Title>
                        We accept
                    </Title>
                    <Payments>
                        <PaymentItem>
                            <SocialLink href="https://www.paypal.com" target="_blank">
                                <PaypalIcon />
                            </SocialLink>
                        </PaymentItem>
                        <PaymentItem>
                            <SocialLink href="https://www.mastercard.com" target="_blank">
                                <MasterCardIcon />
                            </SocialLink>
                        </PaymentItem>
                        <PaymentItem>
                            <SocialLink href="https://usa.visa.com" target="_blank">
                                <VisaIcon />
                            </SocialLink>
                        </PaymentItem>
                        <PaymentItem>
                            <SocialLink href="https://www.americanexpress.com" target="_blank">
                                <AmericanExpIcon />
                            </SocialLink>
                        </PaymentItem>
                    </Payments>
                </BottomList>
            </Bottom>
        </Container>
        <CopyRight>?? 2022 GreenShop. All Rights Reserved.</CopyRight>
    </>
)