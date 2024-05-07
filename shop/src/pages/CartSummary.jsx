import { Link } from "react-router-dom"
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
} from "reactstrap";

function CartSummary({ cart, removeFromCart }) {

    const renderSummary = () => {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                </DropdownToggle>
                <DropdownMenu right>
                    {cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color="danger" onClick={() => removeFromCart(cartItem.product)}>X</Badge>
                            {cartItem.product.productName}
                            <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="cart">Go to cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    const renderEmptyCart = () => {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        );
    }

    return (
        <div>{cart.length > 0 ? renderSummary() : renderEmptyCart()}</div>
    )
}

export default CartSummary
