import Home from "pages/home";
import Login from "pages/login";
import Product from "pages/products";
import ProductView from "pages/products/view";
import { CHECKOUT, HOME, LOGIN, PRODUCT, PRODUCTVIEW } from "./constants";
export const routeComponents = [
    {
        title: "home",
        path: HOME,
        Component: Home
    },
    {
        title: "login",
        path: LOGIN,
        Component: Login
    },
    {
        title: "product",
        path: PRODUCT,
        Component: Product
    },
    {
        title: "product-view",
        path: PRODUCTVIEW,
        Component: ProductView
    },
    {
        title: "checkout",
        path: CHECKOUT,
        Component: ProductView
    },
]
export const menuList = [
    {
        title: "home",
        path: HOME
    },
    {
        title: "shop",
        path: '/shop'
    },
    {
        title: "plan care",
        path: '/plan-care'
    },
    {
        title: "blogs",
        path: '/blogs'
    },
]