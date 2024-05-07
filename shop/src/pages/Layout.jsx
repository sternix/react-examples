import { Outlet } from "react-router-dom"
import { Container, Row, Col } from "reactstrap";
import Navi from "../components/Navi";
import CategoryList from "../components/CategoryList";

function Layout({ removeFromCart, state, changeCategory, categoryInfo }) {
    return (
        <div>
            <Container>
                <Navi removeFromCart={removeFromCart} cart={state.cart} />
                <Row>
                    <Col xs="3">
                        <CategoryList
                            currentCategory={state.currentCategory}
                            changeCategory={changeCategory}
                            info={categoryInfo}
                        />
                    </Col>
                    <Col xs="9">
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Layout
