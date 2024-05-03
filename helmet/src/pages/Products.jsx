import { Helmet } from "react-helmet"

function Products() {
    return (
        <div>
            <Helmet>
                <title>Ürünlerimiz</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Ürünlerimiz açıklaması" />
            </Helmet>
            <h3>Ürünlerimiz</h3>
        </div>
    )
}

export default Products