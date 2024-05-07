import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import alertify from "alertifyjs";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";
import CartList from "./pages/CartList";
import FormDemo1 from "./pages/FormDemo1";
import FormDemo2 from "./pages/FormDemo2";
import Layout from "./pages/Layout";

function App() {
    const [state, setState] = useState({
        currentCategory: '',
        products: [],
        cart: []
    })
    const productInfo = { title: "ProductList" };
    const categoryInfo = { title: "CategoryList" };

    useEffect(() => {
        getProducts()
    }, [])

    const changeCategory = category => {
        setState({ currentCategory: category.categoryName })
        getProducts(category.id)
    };

    const getProducts = categoryId => {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => setState({ products: data }));
    };

    const addToCart = product => {
        let newCart = state.cart;
        let addedItem = newCart.find(c => c.product.id === product.id);
        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            newCart.push({ product: product, quantity: 1 });
        }

        setState({ cart: newCart });
        alertify.success(product.productName + " added to cart!");
    };

    const removeFromCart = product => {
        let newCart = state.cart.filter(c => c.product.id !== product.id);
        setState({ cart: newCart });
        alertify.error(product.productName + " removed from cart!");
    };

    return (
        <Routes>
            <Route path="/" element={<Layout removeFromCart={removeFromCart} state={state} changeCategory={changeCategory} categoryInfo={categoryInfo} />}>
                <Route
                    index
                    element={<ProductList
                        products={state.products}
                        addToCart={addToCart}
                        currentCategory={state.currentCategory}
                        info={productInfo}
                    />}
                />
                <Route
                    path="cart"
                    element={<CartList cart={state.cart} removeFromCart={removeFromCart} />}
                />
                <Route path="form1" element={<FormDemo1 />} />
                <Route path="form2" element={<FormDemo2 />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App
