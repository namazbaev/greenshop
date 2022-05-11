import { useState } from 'react';
import Card from 'components/Card';
import { categories, products } from 'utils/json';
import {
    BannerText, BannerDescription, ShopNow, BannerGreen,
    Container, Banner, TextSection, ImageSection, BannerTitle, Catalog,
    CatalogSection, Categories, Products, CategoryTitle, Size, /*SuperSales,*/
    CategoryList, CategoryItem, CategoryName, CategoryNumber, SizeList, SizeItem,
    ProductHead, TabsWrap, Tabs, TabItem, TabName, Sort, SortText, DownArrowIcon
} from './style';
const Home = () => {
    const [sortActive, setSortActive] = useState(false);
    const [categoryClick, setCategoryClick] = useState(false);
    return (
        <Container>
            <Banner>
                <TextSection>
                    <BannerText>
                        welcome to greenshop
                    </BannerText>
                    <BannerTitle>
                        Let’s Make a Better
                        {' '}<BannerGreen>Planet</BannerGreen>
                    </BannerTitle>
                    <BannerDescription>
                        We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                    </BannerDescription>
                    <ShopNow>
                        Shop Now
                    </ShopNow>
                </TextSection>
                <ImageSection />
            </Banner>
            <CatalogSection>
                <Categories>
                    <CategoryTitle>Categories</CategoryTitle>
                    <CategoryList>
                        {categories.map(({ title, count }) => (
                            <CategoryItem key={title}>
                                <CategoryName onClick={() => setCategoryClick(!categoryClick)}>{title}</CategoryName>
                                <CategoryNumber>({count})</CategoryNumber>
                            </CategoryItem>
                        ))}
                    </CategoryList>
                    <CategoryTitle>
                        Price Range
                    </CategoryTitle>
                    <CategoryTitle>
                        Size
                    </CategoryTitle>
                    <SizeList>
                        <SizeItem>
                            <Size>Small</Size>
                            <Size>(119)</Size>
                        </SizeItem>
                        <SizeItem>
                            <Size>Medium</Size>
                            <Size>(86)</Size>
                        </SizeItem>
                        <SizeItem>
                            <Size>Large</Size>
                            <Size>(78)</Size>
                        </SizeItem>
                    </SizeList>
                </Categories>
                {/* <SuperSales /> */}
                <Products>
                    <ProductHead>
                        <TabsWrap>
                            <Tabs>
                                <TabItem active>
                                    <TabName active>
                                        All Plants
                                    </TabName>
                                </TabItem>
                                <TabItem>
                                    <TabName>
                                        New Arrivals
                                    </TabName>
                                </TabItem>
                                <TabItem>
                                    <TabName>
                                        Sale
                                    </TabName>
                                </TabItem>
                            </Tabs>
                        </TabsWrap>
                        <Sort onClick={() => setSortActive(!sortActive)}>
                            <SortText>
                                Short by: Default sorting
                            </SortText>
                            <DownArrowIcon active={sortActive ? sortActive : ''} />
                        </Sort>
                    </ProductHead>
                    <Catalog>
                        {products.map(({ image, title, price }, index) => (
                            <Card key={index} img={image} title={title} price={`$${price}`} />
                        ))}
                    </Catalog>
                </Products>
            </CatalogSection>
        </Container>
    )
}

export default Home