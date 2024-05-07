import { Link } from "react-router-dom";
import { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import CartSummary from "../pages/CartSummary";

function Navi({ cart, removeFromCart }) {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Northwind App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/form1">Form Demo 1</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/form2">Form Demo 2</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <CartSummary
                            removeFromCart={removeFromCart}
                            cart={cart}
                        />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi