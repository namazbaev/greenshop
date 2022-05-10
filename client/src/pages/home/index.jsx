import React from 'react';
import {
    Container, Banner, TextSection, ImageSection, BannerTitle,
    BannerText, BannerDescription, ShopNow, BannerGreen,
    CatalogSection, Categories, Products, CategoryTitle,
    CategoryList, CategoryItem, CategoryName, CategoryNumber
} from './style';
const Home = () => {
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
                        <CategoryItem>
                            <CategoryName active>House Plants</CategoryName>
                            <CategoryNumber active>(33)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Potter Plants</CategoryName>
                            <CategoryNumber>(12)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Seeds</CategoryName>
                            <CategoryNumber>(65)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Small Plants</CategoryName>
                            <CategoryNumber>(39)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Big Plants</CategoryName>
                            <CategoryNumber>(23)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Succulents</CategoryName>
                            <CategoryNumber>(17)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Trerrariums</CategoryName>
                            <CategoryNumber>(19)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Gardening</CategoryName>
                            <CategoryNumber>(13)</CategoryNumber>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryName>Accessories</CategoryName>
                            <CategoryNumber>(18)</CategoryNumber>
                        </CategoryItem>
                    </CategoryList>
                </Categories>
                <Products>
                    Products
                </Products>
            </CatalogSection>
        </Container>
    )
}

export default Home