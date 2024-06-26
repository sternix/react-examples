import { Table, Button } from "reactstrap";

function ProductList({ info, currentCategory, products, addToCart }) {
    return (
        <div>
            <h3>
                {info.title}-{currentCategory}
            </h3>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Units In Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitsInStock}</td>
                            <td><Button onClick={() => addToCart(product)} color="info">add</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductList