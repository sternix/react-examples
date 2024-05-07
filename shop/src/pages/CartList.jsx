import { Table, Button } from "reactstrap";

function CartList({ cart, removeFromCart }) {
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(cartItem => (
                        <tr key={cartItem.product.id}>
                            <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.unitsInStock}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <Button
                                    color="danger"
                                    onClick={() => removeFromCart(cartItem.product)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CartList