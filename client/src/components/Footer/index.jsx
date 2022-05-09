import {
    Container, Top, Center, Bottom, List, Item, Image,
    Title, Description, Email, EmailInput, JoinButton
} from './style';
import Flower1 from 'assets/icons/flower-1.svg';
import Flower2 from 'assets/icons/flower-2.svg';
import Flower3 from 'assets/icons/flower-3.svg';
export default () => (
    <Container>
        <Top>
            <List>
                <Item borderRight="true">
                    <Image src={Flower1} />
                    <Title>
                        garden care
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
                        We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green) house to yours!
                    </Description>
                </Item>
            </List>
            Top
        </Top>
        <Center>
            Center
        </Center>
        <Bottom>
            Bottom
        </Bottom>
    </Container>
)