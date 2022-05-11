import { Content, Card, ImageWrapper, Image, Footer, Title, Price } from './style';
export default ({ img, title, price }) => (
    <Content>
        <Card>
            <ImageWrapper>
                <Image src={img} />
            </ImageWrapper>
            <Footer>
                <Title>{title}</Title>
                <Price>{price}</Price>
            </Footer>
        </Card>
    </Content>
)